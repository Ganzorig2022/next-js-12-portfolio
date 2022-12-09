//https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity';