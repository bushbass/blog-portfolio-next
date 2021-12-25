import React from 'react'

function withPropsFromAPI({data}) {
    return (
        <div>
            {data.drinks[0].strDrink}
        </div>
    )
}

  export async function getStaticProps(context) {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    const data = await res.json()
  
// even though this endpoint returns a random data, since this runs at build time
// if you reload the page after build it will no give a new random data
//  the random data is only provided once, at build time

    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }


export default withPropsFromAPI

