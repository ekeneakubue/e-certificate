import React from 'react'
import { Container } from 'react-bootstrap'
import './Login.css'

export default function Form() {
  return (
    <Container>
        <h6 className='title-txt'><span className='text-success'>Admin</span>Login</h6>
        <div className='row'>
            <div className='col'></div>
            <div className='col-8 log-pane'><br/>                
                <form class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <input type="text" class="form-control" id="validationTooltip01" value="username" required />
                        </div>

                        <div class="col-md-12 mb-3">
                            <input type="text" class="form-control" id="validationTooltip02" value="password" required />
                        </div>
                    </div><br/> 
                                        
                    <button class="btn btn-outline-dark" type="submit">Log In</button>
                </form>
            </div>
            <div className='col'></div>
        </div>
      
    </Container>
  )
}
