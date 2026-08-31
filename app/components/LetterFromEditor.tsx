import "./LetterFromEditor.css"
import NsopIllustration from "/nsop-illo.png"

const editorLetter = [
    "Welcome to Columbia! Your first year here marks a new chapter—not just for you but for the University, as it seeks a fresh start after four years of unprecedented upheaval.",
    "You are the first class to start an academic year alongside a permanent president since the class of 2027, your soon-to-be senior classmates who arrived in 2023 under then-University President Minouche Shafik. University President Jennifer Mnookin took office this summer, after two interim presidents spent the last two years leading Columbia through some of its hardest times.",
]

const editorLetterParagraph3Parts = {
    before: "Those years included the April 2024 ",
    link1Text: "Gaza Solidarity Encampment",
    link1Href: "https://www.columbiaspectator.com/news/2024/05/02/timeline-the-gaza-solidarity-encampment/",
    middle: " and the arrests of protesters that followed, Shafik's resignation, a ",
    link2Text: "$221 million settlement",
    link2Href: "https://www.columbiaspectator.com/news/2025/07/23/columbia-will-pay-220-million-in-deal-with-trump-administration-to-resume-federal-funding/",
    after: " with President Donald Trump's administration over antisemitism allegations that restored federal funding, and the Immigration and Customs Enforcement detentions of several Columbia affiliates. The University also spent this past year debating a plan to expand undergraduate enrollment by up to 20 percent—a proposal that occurred against the backdrop of federal demands and drew pushback from students and faculty over overcrowded dining halls, libraries, and housing.",
}

const editorLetterRemainder = [
    "What comes next—how Mnookin leads, how far federal scrutiny reaches, and how Columbia will move ahead with expanding its student body—will likely define your four years here. ",
    "This special edition is meant to help you get acquainted with the Columbia you are inheriting, and to get to know Spectator a little better.",
]

const specInfoHeaders = ["ABOUT SPECTATOR", "JOINING SPECTATOR AND WORK-STUDY"]

const specInfo = [
    "ABOUT SPECTATOR",
    "Spectator is a financially independent nonprofit and the largest student-run media organization on campus, serving thousands of readers across Columbia, Morningside Heights, and West Harlem. We have a 150-year tradition of documenting history as it unfolds through in-depth, well-reported stories that hold institutional power to account.",
    "Central to our mission is helping our audience make the most of its experience at Columbia and in its surrounding communities through our award-winning journalism, and more recently our service-orientated products, which include professor review platform CULPA, dining service LionDine, and housing guide The Shaft. With Spectator's publications and products, we aim to identify and directly address the needs of students, faculty, staff, and residents. Across all of our sections, which include reporters, multimedia journalists, designers, analysts, salespeople, engineers, and more, we work to keep you informed and to continuously improve your college experience within and beyond the campus gates.",
    "JOINING SPECTATOR AND WORK-STUDY",
    "Joining Spectator is one of the best ways to kick off your four years at Columbia. When you become a member of Spectator, you step into a community of sharp, passionate students who constantly push themselves, the people around them, and the community they serve to be better. Along the way, you'll build lifelong connections and friendships. Working at Spectator is an unmatched opportunity to be part of an independent organization that has a direct impact on your new community. Through the work they do for Spectator's journalism, business, and technology teams, our staff members grow as leaders, thinkers, and people, gaining skills that apply to any career path they choose to pursue.",
]

export function SpecInfoSection() {
    return (
        <div className="spec-info-section">
            {specInfo.map((item) =>
                specInfoHeaders.includes(item)
                    ? <h2 className="spec-info-header" key={item}>{item}</h2>
                    : <p className="spec-info-body" key={item}>{item}</p>
            )}
            <p className="spec-info-body">
                As such, we are committed to ensuring that anyone who wants to join Spectator can, no matter their experience or background. That is why we are proud to offer the best work-study jobs on campus. If you qualify for work-study opportunities, you can apply to Spectator's work-study program right away—even as a trainee—and get paid for your hard work. You do not need any prior experience to join any of Spectator's departments, so be sure to come to an open house and check out our{" "}
                <a href="https://www.specpublishing.com/join" target="_blank" rel="noopener noreferrer">
                    recruitment web page
                </a>
                {" "}to learn more about how you can get involved.
                If you have any questions, don't hesitate to reach out to us directly at{" "}
                <a href="mailto:editor@columbiaspectator.com">
                    editor@columbiaspectator.com
                </a>.
            </p>
        </div>
    )
}

export function EditorLetterCopy() {
    return (
        <>
            <h2 id="homepage-letter-title">Dear class of 2030,</h2>
            {editorLetter.map((paragraph) => <p className="letter-body" key={paragraph}>{paragraph}</p>)}
            <p className="letter-body">
                {editorLetterParagraph3Parts.before}
                <a href={editorLetterParagraph3Parts.link1Href} target="_blank" rel="noopener noreferrer">
                    {editorLetterParagraph3Parts.link1Text}
                </a>
                {editorLetterParagraph3Parts.middle}
                <a href={editorLetterParagraph3Parts.link2Href} target="_blank" rel="noopener noreferrer">
                    {editorLetterParagraph3Parts.link2Text}
                </a>
                {editorLetterParagraph3Parts.after}
            </p>
            {editorLetterRemainder.map((paragraph) => <p className="letter-body" key={paragraph}>{paragraph}</p>)}
            <div className="letter-signoff">
                <div className="letter-signoff-person">
                    <span className="letter-signoff-script">Tsehai Alfred</span>
                    <span className="letter-signoff-role">Editor in Chief and President</span>
                </div>
                <div className="letter-signoff-person">
                    <span className="letter-signoff-script">Manuela Moreyra</span>
                    <span className="letter-signoff-role">Managing Editor and Vice President</span>
                </div>
                <div className="letter-signoff-person">
                    <span className="letter-signoff-script">Melinda Yao</span>
                    <span className="letter-signoff-role">Publisher and Vice President</span>
                </div>
            </div>
        </>
    )
}

export default function LetterFromEditor() {
    return (
        <>
            <div className="letter-page">
                <div className="left-side">
                    <img src={NsopIllustration} alt="NSOP illustration" />
                </div>
                <div className="right-side">
                    <div className="letter-box">
                        <EditorLetterCopy />
                    </div>
                </div>
            </div>
        </>
    )
}