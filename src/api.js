import JsonClient from 'json-client';

const client = new JsonClient('https://swapi.co/api/');

export const getRoots = async () => await client('get', '', null, null);
export const getRoot = async root => await client('get', root, null, null);
export const getSpecific = async ref => await client('get', ref, null, null);