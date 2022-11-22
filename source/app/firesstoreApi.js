import axios from 'axios';

const firestoreUrl = 'https://firestore.googleapis.com/v1/projects/platzi-blog-8102c/databases/(default)/documents'

const formater = (doc) => {
  return Object.entries(doc.fields).reduce((prev, [key, value]) => {
    return { ...prev, [key]: value.integerValue || value.stringValue }
  }, {});
};


const formaterList = (docs) => {
  return docs.map((item) => formater(item))
};

const fetchList = async ({ collection, pageSize = 10, orderBy='id+desc', nextPageToken=null }) => {
  let completeUrl = `${firestoreUrl}/${collection}?pageSize=${pageSize}&orderBy=${orderBy}`;
  if (nextPageToken) completeUrl = `${completeUrl}&pageToken=${nextPageToken}`
  const { data } = await axios.get(completeUrl);
  return {
    nextPageToken: data.nextPageToken,
    documents: formaterList(data.documents),
  };
};

const fetchSingle = async ({ collection, url }) => {
  const completeUrl = `${firestoreUrl}/${collection}/${url}`
  const { data } = await axios.get(completeUrl);
  return formater(data);
};

export default {
  fetchList,
  fetchSingle,
}




