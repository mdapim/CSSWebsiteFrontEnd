export function Resource({title,links}) {
    

    const mapLinks=resources=> {
        const resourceJSX = resources.map(resource=> {
            return <li><a href={resource.resource_link}>{resource.resource_description}</a></li>
        })
        return resourceJSX
    }

    return (
        
        <div className='content'>
        <h3>
            {title}
        </h3>
        <hr/>
        <ul>
            {mapLinks(links)}
        </ul>
    </div>
    )
}