import React from 'react';

import './SectionForm.css';

const SectionForm = React.forwardRef((props, ref) => (
  <div ref={ref} className="section-form">
    <h1>
      PARTICIPE E ENVIE SUA IDEIA
    </h1>
    <h2>
      QUESTIONÁRIO
    </h2>
    <form>
      <label htmlFor="nome">
        NOME
      </label>
      <input id="nome" type="text" name="nome" />
    </form>
  </div>
));

export default SectionForm;
