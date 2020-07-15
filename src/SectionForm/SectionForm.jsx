import React, { useRef, useImperativeHandle } from 'react';

import './SectionForm.css';

const SectionForm = React.forwardRef((props, ref) => {
  const firstFieldRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToForm: () => {
      window.scrollTo(0, firstFieldRef.current.offsetTop)
      firstFieldRef.current.focus();
      console.log(firstFieldRef.current);
    },
  }), []);

  return (
    <div ref={ref} className="section-form">
    <h1>
      PARTICIPE E ENVIE SUA IDEIA
    </h1>
    <h2>
      QUESTIONÁRIO
    </h2>
    <form>
      <input ref={firstFieldRef} type="text" placeholder="NOME" />
    </form>
  </div>
  );
});

export default SectionForm;
