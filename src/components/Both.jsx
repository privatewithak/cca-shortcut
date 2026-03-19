import Rules from './Rules'
import Codes from './Codes'

export default function Both() {
    return (
        <div className="mt-2 flex flex-row gap-12 w-full h-full px-8 justify-center overflow-hidden">
            
            <Rules />
            <Codes />
        </div>
    )
}
