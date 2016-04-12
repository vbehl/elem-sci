import React from 'react';
import GradeSelector from './GradeSelector';
import BookContainer from './BookContainer';

const books = [
  {
    title: 'CK-12 First Grade Science',
    imageUrl: 'https://www.ck12.org/flx/show/THUMB_LARGE/cover%20page/user%3Ayxv0ag9ycy1kzxnay2sxmi5vcmc./3-1459204084-2-12-NGSS-g1.jpg'
  },
  {
    title: 'CK-12 Second Grade Science',
    imageUrl: 'https://www.ck12.org/flx/show/THUMB_LARGE/cover%20page/user%3Ayxv0ag9ycy1kzxnay2sxmi5vcmc./3-1459203973-32-17-NGSS-g2.jpg'

  },
  {
    title: 'CK-12 Third Science',
    imageUrl: 'https://www.ck12.org/flx/show/THUMB_LARGE/cover%20page/user%3Ayxv0ag9ycy1kzxnay2sxmi5vcmc./3-1459204173-53-51-NGSS-g3.jpg'
  },
  {
    title: 'CK-12 Fourth Grade Science',
    imageUrl: 'https://www.ck12.org/flx/show/THUMB_LARGE/cover%20page/user%3Ayxv0ag9ycy1kzxnay2sxmi5vcmc./3-1459198027-73-92-NGSS-g4-.jpg'
  },
  {
    title: 'CK-12 Fifth Grade Science',
    imageUrl: 'https://www.ck12.org/flx/show/THUMB_LARGE/cover%20page/user%3Ayxv0ag9ycy1kzxnay2sxmi5vcmc./3-1459197145-91-56-NGSS-g5-.jpg'
  }
];

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <GradeSelector/>
        <BookContainer books={books}/>
     </div>
    )
  }
}
