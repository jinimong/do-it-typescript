import { fetchJokes } from '../fetchJokes';
import fetch from 'node-fetch';

fetchJokes()
  .then((result) => console.log(result))
  .catch((e: Error) => console.log(e.message));

/*
{ type: 'success',
  value:
   [ { id: 566,
       joke:
        'Chuck Norris could use anything in java.util.* to kill you, including the javadocs.',
       categories: [Array] },
     { id: 563,
       joke: 'Chuck Norris causes the Windows Blue Screen of Death.',
       categories: [Array] },
     { id: 503,
       joke:
        'Chuck Norris protocol design method has no status, requests or responses, only commands.',
       categories: [Array] },
     { id: 515,
       joke:
        'Chuck Norris compresses his files by doing a flying round house kick to the hard drive.',
       categories: [Array] },
     { id: 534,
       joke: 'Chuck Norris is the ultimate mutex, all threads fear him.',
       categories: [Array] } ] }
*/
