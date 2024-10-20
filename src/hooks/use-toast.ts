"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

<<<<<<< HEAD
type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
=======
type Action =
  | {
      type: typeof actionTypes["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: typeof actionTypes["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: typeof actionTypes["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: typeof actionTypes["REMOVE_TOAST"]
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
<<<<<<< HEAD
    case "ADD_TOAST":
=======
    case actionTypes.ADD_TOAST:
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

<<<<<<< HEAD
    case "UPDATE_TOAST":
=======
    case actionTypes.UPDATE_TOAST:
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

<<<<<<< HEAD
    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
=======
    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
<<<<<<< HEAD
    case "REMOVE_TOAST":
=======
    case actionTypes.REMOVE_TOAST:
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
<<<<<<< HEAD
=======
    default:
      return state
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
<<<<<<< HEAD
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
=======
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id })

  dispatch({
    type: actionTypes.ADD_TOAST,
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
<<<<<<< HEAD
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
=======
    dismiss: (toastId?: string) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
>>>>>>> 3a1e1d4c2a32b023ee537394e6aeca1824e2c62d
  }
}

export { useToast, toast }
