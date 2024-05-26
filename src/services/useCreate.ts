import { Axios } from '@/utils/Axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type props = {
  url: string
  key: string
  id?: number
}

export function useCreate<T>(props: props) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: T) => {
      const response = await Axios.post(props.url, data)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [props.key] })
    },

    onSettled: async (_, error) => {
      console.log('settled')
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: [props.key] })
      }
    },
  })
}

export function useUpdateTodo<T>(props: props) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: T) => {
      const res = await Axios.patch(`props.url/${data}`, data)
      return res.data
    },

    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: [props.key] })
        await queryClient.invalidateQueries({
          queryKey: [props.key],
        })
      }
    },
  })
}

export function useDeleteTodo(props: props) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      const res = await Axios.delete(`${props.url}/${id}`)
      return res.data
    },

    onSuccess: () => {
      console.log('deleted successfully')
    },

    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: [props.key] })
      }
    },
  })
}
