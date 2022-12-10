const LandingHelpBlock = ({title, body}) => {

    const content =
        <>
            <h3 className='landing-help__block_title'>
                {title}
            </h3>
            <div className="landing-help__block_content">
                {body.length && body.map(p => <p key={Math.random()}>{p}</p>)}
            </div>
        </>
    return (
        <div
            className='landing-help__block'
        >
            {content}
        </div>
    )
}

export default LandingHelpBlock
