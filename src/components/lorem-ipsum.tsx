"use client";

import LoremIpsum from "react-lorem-ipsum";

export default function Lorem(
    {p, avgWordsPerSentence, avgSentencesPerParagraph, random}: 
    {p?: number, avgWordsPerSentence?: number, avgSentencesPerParagraph?: number, random: boolean}
) {
    return (
        <div className="[&_p]:pt-5">
            <LoremIpsum 
                p={p ?? 1} 
                avgWordsPerSentence={avgWordsPerSentence ?? 8}
                avgSentencesPerParagraph={avgSentencesPerParagraph ?? 10}
                random={random ?? true}
            />
        </div>
    );
    /*
    return (
        <MDXProvider components={{ LoremIpsum }}>
            <div className="[&_p]:pt-5">
                <LoremIpsum 
                    p={p ?? 1} 
                    avgWordsPerSentence={avgWordsPerSentence ?? 8}
                    avgSentencesPerParagraph={avgSentencesPerParagraph ?? 6}
                    random={random ?? true}
                />
            </div>
        </MDXProvider>
    );
    */
}