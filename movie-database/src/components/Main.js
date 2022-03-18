import Hello from './Hello.js';
function Main() {
    // Mengirim props
    return (
        <div>
            <Hello name="bilal" major="leadership" />
            <Hello name="fitrah" major="digital marketing" />
            <Hello name="sauqi" major="konten kreator" />
            <Hello name="abu thallib" major="UI/ux" />
            <Hello name="laila" major="Photographer" />
        </div>
    )
}

export default Main;