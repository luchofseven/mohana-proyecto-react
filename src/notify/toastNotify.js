import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function toastNotify ({ message }) {
  return toast.success(message, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: 0,
    theme: 'colored'
  })
}
