import { MovieMedia, ShowMedia } from '@/main/media';
import { Stream } from '@/providers/streams';
import { EmbedScrapeContext, ScrapeContext } from '@/utils/context';

export type SourcererOutput = {
  embeds: {
    embedId: string;
    url: string;
  }[];
  stream?: Stream;
};

export type Sourcerer = {
  id: string;
  name: string; // displayed in the UI
  rank: number; // the higher the number, the earlier it gets put on the queue
  disabled?: boolean;
  scrapeMovie?: (input: ScrapeContext & { media: MovieMedia }) => Promise<SourcererOutput>;
  scrapeShow: (input: ScrapeContext & { media: ShowMedia }) => Promise<SourcererOutput>;
};

export function makeSourcerer(state: Sourcerer): Sourcerer | null {
  if (state.disabled) return null;
  return state;
}

export type EmbedOutput = {
  stream?: Stream;
};

export type Embed = {
  id: string;
  name: string; // displayed in the UI
  rank: number; // the higher the number, the earlier it gets put on the queue
  disabled?: boolean;
  scrape: (input: EmbedScrapeContext) => Promise<EmbedOutput>;
};

export function makeEmbed(state: Embed): Embed | null {
  if (state.disabled) return null;
  return state;
}
