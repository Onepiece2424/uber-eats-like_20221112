import React, { useEffect } from 'react';

// apis
import { fetchFoods } from '../apis/foods';

export const Foods = () => {

  useEffect(() => {
    fetchFoods(1)
    .then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <>
      フード一覧
    </>
  )
}
