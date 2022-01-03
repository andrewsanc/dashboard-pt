import React from "react";
import faker from "faker";

const ProjectCard = () => {
  const languageTags = ["Chinese", "Arabic", "Spanish", "Korean", "Russian"];
  const subtopicCategory = [
    "Currency/Finance",
    "Government/Internal Politics",
    "International Relations",
    "Sports/Recreation",
    "Arts/Literature",
    "Cybersecurity",
  ];

  const modalityTags = [
    "Listening",
    "Reading",
    "Writing/Typing in Enlgish",
    "Writing/Typing in Romanization",
  ];

  const skillSetTags = [
    "Transcription",
    "Summarization",
    "Translation/Rendition",
    "Speaking",
    "Vocabulary",
  ];

  return (
    <div class='rounded overflow-hidden shadow-lg m-4 h-auto w-80'>
      <img class='' src={faker.image.nature()} alt='nature' />
      <div class='px-6 py-4'>
        <div class='font-bold text-xl mb-2'></div>
        <p class='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class='px-6 pt-4 pb-2'>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #{languageTags[Math.floor(Math.random() * languageTags.length)]}
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #{modalityTags[Math.floor(Math.random() * modalityTags.length)]}
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #
          {
            subtopicCategory[
              Math.floor(Math.random() * subtopicCategory.length)
            ]
          }
        </span>
        <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #{skillSetTags[Math.floor(Math.random() * skillSetTags.length)]}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
