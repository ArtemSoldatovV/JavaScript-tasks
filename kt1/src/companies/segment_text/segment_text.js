import React from 'react';
import '../../App.css';

function segment_text({ title, paragraph }) {
  return (
	<div class="segment_text">{title} <br/>{paragraph}</div>
  );
}
export default segment_text;