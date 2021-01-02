import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => {

  return(
  <PostItem 
    origin={{class: 'search', filter: "search"}}
    slug={hit.fields.slug}
    date={hit.date}
    title={hit.title}
    description={hit.description}
    category={hit.category}
    subject={hit.subject}
    timeToRead={hit.timeToRead}
    image={hit.image}
  />
)
}
export default Hit