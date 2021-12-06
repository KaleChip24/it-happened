import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function FeatForm(props) {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')


  return (
    <form className="feat-form">
      <input />
      <input />
      <button>Comment</button>
    </form>
  );
}

export default FeatForm;