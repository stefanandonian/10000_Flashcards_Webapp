import React, { Component } from 'react';

class Conjugations extends Component {

    constructor(props) {
        super(props);

        this.state = { conjugations: {}
        };
    }

    render() {

    return (
      <div>       
          <table>
            <tbody>
              <tr> 
                 <td> Infinitive </td> 
                 <td> nadar </td>
              </tr>
              <tr>
                 <td> Gerud </td>
                 <td> Past Participle </td>
              </tr>
              <tr>
                 <td> nadando </td>
                 <td> nadado </td>
              </tr>
              <tr>
                <td></td>
                <td> Yo </td>
                <td> Tu </td>
                <td> El/Ella/Usted </td>
                <td> Nosotros </td>
                <td> Vosotros </td>
                <td> Ellos/ Ustedes </td>
              </tr>
              <tr className="table-title"><td> Infinitive </td></tr>
              <tr>
                <td> Present </td>
                <td> nado </td>
                <td> nadas </td>
                <td> nada </td>
                <td> nadamos </td>
                <td>  </td>
                <td> nadan </td>
              </tr>
              <tr>
                <td> Past </td>
                <td> nadé </td>
                <td> nadaste </td>
                <td> nadó </td>
                <td> nadaramos </td>
                <td>  </td>
                <td> nadaron </td>
              </tr>
              <tr>
                <td> Continuous </td>
                <td> nadaba </td>
                <td> nadabas </td>
                <td> nadaba </td>
                <td> nadabamos </td>
                <td>  </td>
                <td> nadaban </td>
              </tr>
              <tr>
                <td> Future </td>
                <td> nadaré </td>
                <td> nadarás </td>
                <td> nadará </td>
                <td> nadarámos </td>
                <td>  </td>
                <td> nadarán </td>
              </tr>
              <tr>
                <td> Possible Future </td>
                <td> nadaría </td>
                <td> nadarías </td>
                <td> nadaría </td>
                <td> nadaríamos </td>
                <td>  </td>
                <td> nadarían </td>
              </tr>
              </tbody>
          </table>
      </div>
    );
  }
  
}

export default Conjugations;
