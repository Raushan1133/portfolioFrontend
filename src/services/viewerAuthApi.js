import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const viewerAuthApi = createApi({
  reducerPath: 'viewerAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-j9pb.onrender.com' }),
  endpoints: (builder) => ({
    getViewerInfo: builder.mutation({
      query: (viewer) => {
            return{
                url:'submit',
                method:'POST',
                body:viewer,
                headers:{
                    'content-type':'application/json'
                }
            }
      },
    }),
  }),
})


export const {useGetViewerInfoMutation} = viewerAuthApi