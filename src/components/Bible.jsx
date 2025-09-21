import TextFileReader from "./TextFileReader"

const Bible = () => {
    return (
        <div className="views">
            <h3>
                Bible verses
            </h3>
            
            <TextFileReader fileName={'/bible.txt'} />

            <small>EASY version</small>

        </div>
    )
}

export default Bible