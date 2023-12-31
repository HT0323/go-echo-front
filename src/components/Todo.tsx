import { useQueryClient } from '@tanstack/react-query'
import {
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid'
import { useMutateAuth } from '../hooks/useMutateAuth'

export const Todo = () => {
  const queryClient = useQueryClient()
  const { logoutMutation } = useMutateAuth()

  const logout = async () => {
    await logoutMutation.mutateAsync()
    queryClient.removeQueries(['tasks'])
  }
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">

      <ArrowRightOnRectangleIcon
        onClick={logout}
        className="h-6 w-6 my-6 text-blue-500 cursor-pointer"
      />
    </div>
  )
}
