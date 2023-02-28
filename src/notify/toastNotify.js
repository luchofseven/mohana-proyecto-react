import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function toastNotify ({ message }) {
  return toast.success(message, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: 0,
    theme: 'colored'
  })
}
