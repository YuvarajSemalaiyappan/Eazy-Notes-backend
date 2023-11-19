import { client } from "../index.js";

export async function saveContent(email, data) {
  return await client
    .db("EazyNotes")
    .collection("content")
    .insertOne({ email: email, data: data });
}

export async function user(email) {
  return await client
    .db("EazyNotes")
    .collection("content")
    .findOne({ email: email });
}

export async function updateContent(email, data) {
  return await client
    .db("EazyNotes")
    .collection("content")
    .updateOne({ email: email }, { $set: { data: data } });
}
