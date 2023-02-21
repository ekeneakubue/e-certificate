import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Form.css'

export default function Form() {
  return (
    <Container>
        <h6 className='title-txt'><span className='text-success'>UNN</span> E-certificate Application</h6>
        <div className='row'>
            <div className='col'></div>
            <div className='col-8 quest-pane'>                
                <form class="needs-validation" novalidate>
                    <p className='text-left text-success'>Enter Registration Number/Remiter No</p>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" id="validationTooltip01" placeholder = 'Registration Number' required />
                        </div>

                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" id="validationTooltip02" placeholder='Remiter Number' required />
                        </div>
                    </div> <br/> 

                    <button class="btn btn-outline-dark" type="submit">Process Certificate</button>
                </form><br/>
                <p className='text-center text-danger'>Generate Remiter No</p>
            </div>
            <div className='col'></div>
        </div>
      
    </Container>
  )
}
