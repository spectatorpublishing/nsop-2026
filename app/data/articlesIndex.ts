import university from "./uniarticles";
import artsCulture from "./acarticles";
import sport from "./sportsarticles";
import spectrum from "./spectrumarticles";
import opinion from "./opinionarticles";
import crosswords from "./crosswords";
import city from "./cityarticles";
import video from "./videoarticles";

export const articlesBySection: Record<string, any[]> = {
  university: university,
  ac: artsCulture,
  sports: sport,
  spectrum: spectrum,
  opinion: opinion,
  crosswords: crosswords,
  city: city,
  video: video,
};