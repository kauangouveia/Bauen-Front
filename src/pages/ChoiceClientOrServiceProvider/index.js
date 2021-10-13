import { Container, Modal } from "./styles";
import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function ClientOrServiceProvider() {
  return (
    <Container>
        <Modal>
            <div className="title">
                <h1>
                Deseja se cadastrar como prestador ou cliente ?
                </h1>
            </div>
            <div className="Options">
                <h2>Prestador</h2>
                
                <Checkbox {...label} />              
            </div>
            <div className="Options">
                <h2>Cliente</h2>
                <Checkbox {...label} />              

            </div>
        
        </Modal>
    </Container>
  );
}

export default ClientOrServiceProvider;
