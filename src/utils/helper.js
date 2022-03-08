import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const logger = console.log;

export const htmlToText = html => html.replace(/<(.*?)>/g, '');

export const timeFromNow = date => dayjs(date).fromNow();

export const displayDate = date => dayjs(date).format('MMM YYYY');
