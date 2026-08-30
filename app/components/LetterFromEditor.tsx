import "./LetterFromEditor.css"
import NsopIllustration from "/nsop-illo.png"

const editorLetter = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
]

export function EditorLetterCopy() {
    return (
        <>
            <h2 id="homepage-letter-title">Dear class of 2030,</h2>
            {editorLetter.map((paragraph) => <p className="letter-body" key={paragraph}>{paragraph}</p>)}
            <div className="letter-signoff">
                <div className="letter-signoff-person">
                    <span className="letter-signoff-script">Manuela Moreyra</span>
                    <span className="letter-signoff-role">Managing Editor</span>
                </div>
                <div className="letter-signoff-person">
                    <span className="letter-signoff-script">Tsehai Alfred</span>
                    <span className="letter-signoff-role">Editor in Chief</span>
                </div>
            </div>
        </>
    )
}

export default function LetterFromEditor() {
    return (
        <div className="letter-page">
            <div className="left-side">
                <img src={NsopIllustration} alt="commencement illustration" />
            </div>
            <div className="right-side">
                <div className="letter-box">
                    <EditorLetterCopy />
                </div>
            </div>
        </div>
    )
}