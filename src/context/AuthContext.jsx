import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useState, useEffect, useContext, createContext } from "react"
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore'


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const { children } = props
    const [globalUser, setGlobalUser] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const [loading, setLoading] = useState(false)


    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function logout() {
        setGlobalUser(null)
        setGlobalData(null)
        return signOut(auth)
    }

    const value = { globalUser, globalData, setGlobalData, loading, signup, login, logout }

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log('CURRENT USER: ', user)
            setGlobalUser(user)
            if (!user) {
                console.log('No active user')
                return
            }

            try {
                setLoading(true)

                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)

                let fireBaseData = {}
                if (docSnap.exists()) {
                    fireBaseData = docSnap.data()
                    console.log('Found user data', fireBaseData)
                }
                setGlobalData(fireBaseData)
            } catch(err) {
                console.log(err.massage)
            } finally {
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}