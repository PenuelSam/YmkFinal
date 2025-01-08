import mkvid from "../assets/3D-intro-Miliki/3D-intro-Miliki.mp4";
import mk1 from "../assets/3D-intro-Miliki/mk1.jpeg";
import mk2 from "../assets/3D-intro-Miliki/mk2.jpeg";
import mk3 from "../assets/3D-intro-Miliki/mk3.jpeg";
import mk4 from "../assets/3D-intro-Miliki/mk4.jpeg";
import mk5 from "../assets/3D-intro-Miliki/mk5.jpeg";
import mk6 from "../assets/3D-intro-Miliki/mk6.jpeg";
import mk7 from "../assets/3D-intro-Miliki/mk7.jpeg";
import mk8 from "../assets/3D-intro-Miliki/mk8.jpeg";
import mk9 from "../assets/3D-intro-Miliki/mk9.jpeg";
import mk10 from "../assets/3D-intro-Miliki/mk10.jpeg";
import vidCover from "../assets/3D-intro-Miliki/Miliki-vid-cover.png";

import ehVid from "../assets/Element-House/final.mp4"
import eh1 from "../assets/Element-House/element1.jpeg"
import eh2 from "../assets/Element-House/element2.jpeg"
import eh3 from "../assets/Element-House/element3.jpeg"
import eh4 from "../assets/Element-House/element4.jpeg"
import eh5 from "../assets/Element-House/element5.jpeg"
import eh6 from "../assets/Element-House/element6.jpeg"
import eh7 from "../assets/Element-House/element7.jpeg"
import eh8 from "../assets/Element-House/element8.jpeg"

import esVid from "../assets/engage-space/engageVid.mp4"
import es1 from "../assets/engage-space/engage1.jpeg"
import es2 from "../assets/engage-space/engage2.jpeg"
import es3 from "../assets/engage-space/engage3.jpeg"
import es4 from "../assets/engage-space/engage4.jpeg"
import es5 from "../assets/engage-space/engage5.jpeg"
import es6 from "../assets/engage-space/engage6.jpeg"
import es7 from "../assets/engage-space/engage7.jpeg"
import es8 from "../assets/engage-space/engage8.jpeg"
import es9 from "../assets/engage-space/engage9.jpeg"
import es10 from "../assets/engage-space/engage10.jpeg"
import es11 from "../assets/engage-space/engage11.jpeg"
import es12 from "../assets/engage-space/engage12.jpeg"
import es13 from "../assets/engage-space/engage13.jpeg"
import es14 from "../assets/engage-space/engage14.jpeg"
import vidCover2 from "../assets/engage-space/engage-space-vid-cover.png"

import ovmVid from "../assets/ovmbr/ov-un.mp4"
import ovm1 from "../assets/ovmbr/ov1.jpeg"
import ovm2 from "../assets/ovmbr/ov2.jpeg"
import ovm3 from "../assets/ovmbr/ov4.jpeg"
import ovm4 from "../assets/ovmbr/ov5.jpeg"
import ovm5 from "../assets/ovmbr/ov6.jpeg"
import ovm6 from "../assets/ovmbr/ov7.jpg"
import ovm7 from "../assets/ovmbr/ov8.jpeg"
import ovm8 from "../assets/ovmbr/ov9.jpeg"
import ovm9 from "../assets/ovmbr/ov10.jpeg"
import ovm10 from "../assets/ovmbr/ov11.jpg"
import ovm11 from "../assets/ovmbr/ov12.jpeg"
import ovm12 from "../assets/ovmbr/ov13.jpeg"
import ovm13 from "../assets/ovmbr/ovm14.jpeg"
import ovm14 from "../assets/ovmbr/ovm16.jpeg"
import ovm15 from "../assets/ovmbr/ovm17.jpeg"
import ovm16 from "../assets/ovmbr/ovm18.jpeg"
import ovmCover from "../assets/ovmbr/ovmbr-cover-copy.jpeg"
import vidCover3 from "../assets/ovmbr/ovmbr-vid-cover.png"

import syntax from "../assets/syntax.mp4"
import syntaxCover from "../assets/syntax-vid-cover.png"

import photo from "../assets/photography.jpg"
import video from "../assets/videography.jpg"
import edit from "../assets/video-editing.jpg"

type ProjectType = {
    _id: string;
    name: string;
    videoUrls: string[];
    imageUrls: string[];
    coverPhoto?: string;
}


export const Projects: ProjectType[] = [
        
        {
            _id: "1",
            name: "Engage Space",
            videoUrls: [esVid],
            imageUrls: [es1,es2,es3,es4,es5,es6,es7,es8,es9,es10,es11,es12,es13,es14],
            coverPhoto: vidCover2,
        },
        {
            _id: "2",
            name: "Miliki",
            videoUrls: [mkvid],
            imageUrls: [mk1,mk2,mk3,mk4,mk5,mk6,mk7,mk8,mk9,mk10],
            coverPhoto: vidCover,
        },
        {
            _id: "3",
            name: "Ovmbr",
            videoUrls: [ovmVid],
            imageUrls: [ovmCover,ovm1,ovm2,ovm3,ovm4,ovm5,ovm6,ovm7,ovm8,ovm9,ovm10,ovm11,ovm12,ovm13,ovm14,ovm15,ovm16],
            coverPhoto: vidCover3,
        },
        {
            _id: "5",
            name: "",
            videoUrls: [syntax],
            imageUrls: [],
            coverPhoto: syntaxCover,
        },
        {
            _id: "6",
            name: "Element House",
            videoUrls: [ehVid],
            imageUrls: [eh1,eh4,eh2,eh8,eh5,eh6,eh7,eh3],
            coverPhoto: eh1,
        },
       
]

export const skills =[
    {
        skill: "photography/ work",
        text: "I’ve been taking photos for over 2 years. Most of my photos are mainly events, lifestyle and portrait photography.",
        image: photo
    },
    {
        skill: "videography",
        text: "I am an expereinced videographer with over two years of professional shooting experience. Skilled in capturing visually compelling videos. Proficient in utilizing various cameras, equipment, and editing software to produce engaging content.",
        image: video
    },
    {
        skill: "Video Editing",
        text: "I can edit stunning video for your advertisement. I’ve been editing videos for 7 years and I made over  100 videos for my own projects and many brands. ",
        image: edit
    },

]