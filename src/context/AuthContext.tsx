import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
// import { axiosInstance } from '../Axios'
import { useNavigate } from 'react-router-dom'
import Loading from '@/components/Loading'

type User = {
  userName: string
  email: string
  role: string
}

export interface AuthContextValue {
  user: User
  isAuthen: boolean
  // login: () => Promise<void>;
  logout: () => void
}

type AuthProviderProps = {
  children: React.JSX.Element | React.JSX.Element[]
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthen, setIsAuthen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User>({ email: '', userName: '', role: '' })
  const navigate = useNavigate()

  // const login = async () => {
  //   try {
  //     const res = await axiosInstance.post("/api/auth/google");
  //     // console.log(res)

  //     if (res.status === 200) {
  //       setIsAuthen(true);
  //       MySwal.fire({
  //         icon: "success",
  //         title: "เข้าสู่ระบบสำเร็จ",
  //         timer: 1500,
  //       });
  //       navigate("/home");
  //     }
  //   } catch (error) {
  //     // console.log(error)
  //     MySwal.fire({
  //       icon: "error",
  //       title: "เกิดข้อผิดพลาด!",
  //       text: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
  //       timer: 1500,
  //     });
  //   }
  // };

  const logout = async () => {
    // await axiosInstance.post('/api/users/logout')
    navigate('/')
    setIsAuthen(false)
  }

  const handleLogin = useCallback(async (): Promise<void> => {
    try {
      //   const res = await axiosInstance.get('/api/users/me')
      //   if (res.status === 200) {
      //     setIsAuthen(true)
      //     setUser(res.data.data)
      //   }
      setLoading(false)
    } catch (err) {
      // console.log(err);
      setIsAuthen(false)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleLogin()
    // setLoading(false)
  }, [handleLogin])

  const contextValue = useMemo(() => {
    return {
      user,
      isAuthen,
      // login,
      logout,
    }
  }, [isAuthen])

  if (loading) return <Loading />

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
