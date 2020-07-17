import React, { useState, useRef, useImperativeHandle } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import InputMask from "react-input-mask";

import './SectionForm.css';

const SectionForm = React.forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const firstFieldRef = useRef(null);

  const saveData = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      fetch('http://localhost/', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (response.statusText === 'OK') {
          if (formData.nome === undefined || formData.nome === '') {
            setModalMessage(`
              Obrigado! Sua ideia foi enviada!
            `);
          } else {
            setModalMessage(`
              Obrigado, ${formData.nome}! Sua ideia foi enviada!
            `);
          }
          setShowModal(true);
        }
        return response.json();
      })
      .then((json) => console.log(json));
    }

    setValidated(true);

  };

  useImperativeHandle(ref, () => ({
    scrollToForm: () => {
      window.scrollTo(0, ref.current.offsetTop)
      firstFieldRef.current.focus();
      console.log(firstFieldRef.current);
    },
  }), [ref]);

  return (
    <div ref={ref} className="section-form">
    <h1>
      PARTICIPE E ENVIE SUA IDEIA
    </h1>
    <h2>
      QUESTIONÁRIO
    </h2>
    <Form noValidate validated={validated} onSubmit={saveData}>
      <Form.Group>
        <Form.Label>NOME</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          ref={firstFieldRef}
          onChange={(event) => setFormData({
            ...formData,
            nome: event.target.value
          })}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>WHATSAPP</Form.Label>
        <Form.Control
          as={InputMask}
          mask="(99) 99999-9999"
          name="whatsapp"
          className="form-control"
          isInvalid={
            formData.whatsapp !== undefined &&
            formData.whatsapp !== '' &&
            !/^(\(\d{2}\)\s)(\d{4,5}-\d{4})$/.test(formData.whatsapp)
          }
          onChange={(event) => setFormData({
            ...formData,
            whatsapp: event.target.value
          })}
        />
        <Form.Control.Feedback type="invalid">
          Número de telefone inválido.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>E-MAIL</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="email@exemplo.com"
          isInvalid={
            formData.email !== undefined &&
            formData.email !== '' &&
            !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
          }
          onChange={(event) => setFormData({
            ...formData,
            email: event.target.value
          })}
        />
        <Form.Control.Feedback type="invalid">
          O e-mail não é válido.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>COMUNIDADE OU BAIRRO*</Form.Label>
        <Form.Control
          type="text"
          name="bairro"
          required
          onChange={(event) => setFormData({
            ...formData,
            bairro: event.target.value
          })}
        />
        <Form.Control.Feedback type="invalid">
          Preenchimento obrigatório.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>GRAU DE INSTRUÇÃO*</Form.Label>
        <Form.Control
          name="instrucao"
          as="select"
          required
          value={formData.instrucao || ''}
          onChange={(event) => setFormData({
            ...formData,
            instrucao: event.target.value
          })}
        >
          <option value="" disabled>Selecione...</option>
          <option value="Ensino fundamental">Ensino fundamental</option>
          <option value="Ensino médio">Ensino médio</option>
          <option value="Ensino superior">Ensino superior</option>
          <option value="Pós-Graduação">Pós-Graduação</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Preenchimento obrigatório.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>NA SUA OPNIÃO, QUAL O PRINCIPAL PROBLEMA DO MUNICÍPIO DE SENHOR DO BONFIM?*</Form.Label>
        <Form.Control
          name="problema"
          as="select"
          required
          value={formData.problema || ''}
          onChange={(event) => setFormData({
            ...formData,
            problema: event.target.value
          })}
        >
          <option value="" disabled>Selecione...</option>
          <option value="Asfalto/Calçamento/Pavimentação de ruas">Asfalto/Calçamento/Pavimentação de ruas</option>
          <option value="Desemprego">Desemprego</option>
          <option value="Esgoto/Saneamento">Esgoto/Saneamento</option>
          <option value="Estradas rurais">Estradas rurais</option>
          <option value="Iluminação pública">Iluminação pública</option>
          <option value="Infraestrutura hidríca/Falta de água">Infraestrutura hidríca/Falta de água</option>
          <option value="Limpeza pública/Coleta de Lixo">Limpeza pública/Coleta de Lixo</option>
          <option value="Qualidade de ensino">Qualidade de ensino</option>
          <option value="Saneamento">Saneamento</option>
          <option value="Saúde/Atendimento médico">Saúde/Atendimento médico</option>
          <option value="Violência/Falta de segurança">Violência/Falta de segurança</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Preenchimento obrigatório.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>NA SUA OPNIÃO, DAS SEGUINTES ÁREAS, QUAL DEVE SER PRIORIZADA PELO PRÓXIMO PREFEITO?*</Form.Label>
        <Form.Control
          name="prioridade"
          as="select"
          required
          value={formData.prioridade || ''}
          onChange={(event) => setFormData({
            ...formData,
            prioridade: event.target.value
          })}
        >
          <option value="" disabled>Selecione...</option>
          <option value="Saúde">Saúde</option>
          <option value="Educação">Educação</option>
          <option value="Saneamento">Saneamento</option>
          <option value="Emprego e renda">Emprego e renda</option>
          <option value="Meio ambiente">Meio ambiente</option>
          <option value="Agricultura">Agricultura</option>
          <option value="Infraestrutura">Infraestrutura</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Preenchimento obrigatório.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>NO CAMPO ABAIXO ESCOLHA UM EIXO EM QUAL SUA IDEIA SE ENCAIXA.*</Form.Label>
        <Form.Control
          name="eixo"
          as="select"
          value={formData.eixo || ''}
          required
          onChange={(event) => setFormData({
            ...formData,
            eixo: event.target.value
          })}
        >
          <option value="" disabled>Selecione...</option>
          <option value="Assistência Social">Assistência Social</option>
          <option value="Capacitação e Qualificação dos Servidores Públicos Municipais">ACapacitação e Qualificação dos Servidores Públicos Municipais</option>
          <option value="Ciência e Tecnologia">Ciência e Tecnologia</option>
          <option value="Comércio e Serviços">Comércio e Serviços</option>
          <option value="Comunicação">Comunicação</option>
          <option value="Controle Da Qualidade dos Gastos">Controle Da Qualidade dos Gastos</option>
          <option value="Criança e Adolescente">Criança e Adolescente</option>
          <option value="Defesa Social">Defesa Social</option>
          <option value="Descentralização Administrativa">Descentralização Administrativa</option>
          <option value="Desenvolvimento do Campo, Agricultura Familiar">Desenvolvimento do Campo, Agricultura Familiar</option>
          <option value="Desenvolvimento e Mobilidade urbana">Desenvolvimento e Mobilidade urbana</option>
          <option value="Desenvolvimento Econômico">Desenvolvimento Econômico</option>
          <option value="Economia Solidária">Economia Solidária</option>
          <option value="Educação Esporte e Lazer e Cultura">Educação Esporte e Lazer e Cultura</option>
          <option value="Equilíbrio Fiscal">Equilíbrio Fiscal</option>
          <option value="Fortalecimento do Planejamento e da Gestão Pública">Fortalecimento do Planejamento e da Gestão Pública</option>
          <option value="Igualdade de Gênero">Igualdade de Gênero</option>
          <option value="Igualdade Racial">Igualdade Racial</option>
          <option value="Inclusão Produtiva">Inclusão Produtiva</option>
          <option value="Indústria">Indústria</option>
          <option value="Infraestrutura e Logística">Infraestrutura e Logística</option>
          <option value="Infraestrutura Hídrica">Infraestrutura Hídrica</option>
          <option value="Inovação e Gestão do Conhecimento">Inovação e Gestão do Conhecimento</option>
          <option value="Juventude">Juventude</option>
          <option value="LGBTI+">LGBTI+</option>
          <option value="Modernização da Administração Pública">Modernização da Administração Pública</option>
          <option value="Mulheres">Mulheres</option>
          <option value="Mundo do Trabalho">Mundo do Trabalho</option>
          <option value="Pessoas com Deficiência">Pessoas com Deficiência</option>
          <option value="Políticas Públicas com Participação e Controle Social">Políticas Públicas com Participação e Controle Social</option>
          <option value="Saneamento">Saneamento</option>
          <option value="Saúde e Política sobre Drogas">Saúde e Política sobre Drogas</option>
          <option value="Segurança Pública">Segurança Pública</option>
          <option value="Sustentabilidade Ambiental">Sustentabilidade Ambiental</option>
          <option value="Turismo">Turismo</option>
          <option value="Valorização dos Servidores Públicos Municipais">Valorização dos Servidores Públicos Municipais</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Preenchimento obrigatório.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>NO CAMPO ABAIXO, DESCREVA SUA IDEIA PARA MELHORAR O FUTURO DE SENHOR DO BONFIM.</Form.Label>
        <Form.Control
          name="sugestao"
          as="textarea"
          rows="3"
          required
          onChange={(event) => setFormData({
            ...formData,
            sugestao: event.target.value,
          })}
        />
        <Form.Control.Feedback type="invalid">
          Preenchimento obrigatório.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Enviar
      </Button>
    </Form>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Obrigado pela sua participação!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
});

export default SectionForm;
