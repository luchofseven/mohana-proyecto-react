import { collection, getDocs, getDoc, doc } from 'firebase/firestore'
import { db } from './firestoreConfig'

export async function getProducts () {
  const response = await getDocs(collection(db, 'products'))
  try {
    if (response.size === 0) {
      throw new Error()
    } else {
      return response
    }
  } catch (error) {
    if (error) return error
  }
}

export async function getProduct (id) {
  if (!id) return
  const response = await getDoc(doc(db, 'products', id))
  try {
    if (response.size === 0) {
      throw new Error()
    } else {
      return response
    }
  } catch (error) {
    if (error) return error
  }
}
