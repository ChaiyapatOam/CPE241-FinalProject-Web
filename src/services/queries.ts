import { Axios } from '@/utils/Axios'
import { useQuery } from '@tanstack/react-query'

type props = {
  url: string
  key: string
  id?: number
}

export function useFetch(props: props) {
  return useQuery({
    queryKey: [props.key],
    queryFn: async () => {
      const result = await Axios.get(props.url)
      return result.data.data
    },
  })
}

// export function useTodos(ids: (number | undefined)[] | undefined) {
//   return useQueries({
//     queries: (ids ?? []).map((id) => {
//       return {
//         queryKey: ['todo', { id }],
//         queryFn: () => getTodo(id!),
//       }
//     }),
//   })
// }

// export function useProjects(page: number) {
//   return useQuery({
//     queryKey: ['projects', { page }],
//     queryFn: () => getProjects(page),
//     placeholderData: keepPreviousData,
//   })
// }
