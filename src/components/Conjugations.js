import React, { Component } from 'react';

class Conjugations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      infinitive: "",
      gerund: "",
      pastParticiple: "",
      indicative: [],
      subjunctive: [],
      imperative: []
    };
    
    this.buildTable = this.buildTable.bind(this);
    this.buildTableRows = this.buildTableRows.bind(this);
    this.addConjugationArraysToState = this.addConjugationArraysToState.bind(this);
  }

  async componentDidMount() {
    if(this.props.word[this.props.word.length -1] === 'r') {
    const body = await fetch('http://localhost:8080/RESTful_API/spanish/verb/' + this.props.word, 
                                    { mode: "cors",
                                      method: "GET",
                                      cache: "no-cache",
                                      headers: { "Content-Type": "application/json" } } )
                        .then(response => response.json());
      this.addConjugationArraysToState(body[0]);
    }
  } 
  
  addConjugationArraysToState = (cons) => {
    this.setState({
      infinitive: cons.strInfinitive,
      gerund: cons.strGerund,
      pastParticiple: cons.strPastParticipleMasculineSingular,
      indicative: [
        ["Present",            cons.strIndicativePresentYo,     cons.strIndicativePresentTu,     cons.strIndicativePresentUsted,     cons.strIndicativePresentNosotros,     cons.strIndicativePresentVosotros,     cons.strIndicativePresentEllos],
        ["Imperfect Past",     cons.strIndicativeImperfectYo,   cons.strIndicativeImperfectTu,   cons.strIndicativeImperfectUsted,   cons.strIndicativeImperfectNosotros,   cons.strIndicativeImperfectVosotros,   cons.strIndicativeImperfectEllos],
        ["Preterite Past",     cons.strIndicativePreteriteYo,   cons.strIndicativePreteriteTu,   cons.strIndicativePreteriteUsted,   cons.strIndicativePreteriteNosotros,   cons.strIndicativePreteriteVosotros,   cons.strIndicativePreteriteEllos],
        ["Perfect Future",     cons.strIndicativeFutureYo,      cons.strIndicativeFutureTu,      cons.strIndicativeFutureUsted,      cons.strIndicativeFutureNosotros,      cons.fstrIndicativeFutureVosotros,     cons.strIndicativeFutureEllos],
        ["Conditional Future", cons.strIndicativeConditionalYo, cons.strIndicativeConditionalTu, cons.strIndicativeConditionalUsted, cons.strIndicativeConditionalNosotros, cons.strIndicativeConditionalVosotros, cons.strIndicativeConditionalEllos]
      ],
      subjunctive: [
        ["Present",             cons.strSubjunctivePresentYo, cons.strSubjunctivePresentTu, cons.strSubjunctivePresentUsted, cons.strSubjunctivePresentNosotros, cons.strSubjunctivePresentVosotros, cons.strSubjunctivePresentEllos],
        ["Imperfect Past (Ra)", cons.strSubjunctiveImperfectRaYo, cons.strSubjunctiveImperfectRaTu, cons.strSubjunctiveImperfectRaUsted, cons.strSubjunctiveImperfectRaNosotros, cons.strSubjunctiveImperfectRaVosotros, cons.strSubjunctiveImperfectRaEllos],
        ["Imperfect Past (Se)", cons.strSubjunctiveImperfectSeYo, cons.strSubjunctiveImperfectSeTu, cons.strSubjunctiveImperfectSeUsted, cons.strSubjunctiveImperfectSeNosotros, cons.strSubjunctiveImperfectSeVosotros, cons.strSubjunctiveImperfectSeEllos],
        ["Conditional Future",  cons.strSubjunctiveFutureYo, cons.strSubjunctiveFutureTu, cons.strSubjunctiveFutureUsted, cons.strSubjunctiveFutureNosotros, cons.strSubjunctiveFutureVosotros, cons.strSubjunctiveFutureEllos]
      ],
      imperative: [
        ["Affirmative", "-", cons.strImperativeAffirmativeTu,      cons.strImperativeAffirmativeUsted,      cons.strImperativeAffirmativeNosotros,      cons.strImperativeAffirmativeVosotros,      cons.strImperativeAffirmativeEllos],
        ["Negative",    "-", "No " + cons.strImperativeNegativeTu, "No " + cons.strImperativeNegativeUsted, "No " + cons.strImperativeNegativeNosotros, "No " + cons.strImperativeNegativeVosotros, "No " + cons.strImperativeNegativeEllos]
      ] 
    });
  }

  buildTableRows = (words) => {
    let table_body = []
    for (var i = 0; i < words.length; i++) {
      let child_row = []
      for (var p = 0; p < words[i].length; p++) {
        child_row.push(<td>{words[i][p]}</td>);
      }
      table_body.push(<tr>{child_row}</tr>)
    }
    return table_body;
  }

  buildTable = (title, data) => {
    return (
      <table>
        <caption>{title}</caption>
        <tr>
          <th> </th><th>Yo</th><th>Tu</th><th>Ella</th><th>Nosotros</th><th>Vosotros</th><th>Ellos</th>
        </tr>
        {this.buildTableRows(data)}        
      </table>
    );
  }

  render() {
    if(this.state.infinitive === '') {
      return <div></div>
    } else {
      return (  
        <ul aria-label="Verb Conjugations">
          <li> Infinitive: {this.state.infinitive} Gerund: {this.state.gerund} Past Participle: {this.state.pastParticiple} </li>
          <li>{this.buildTable("Indicative", this.state.indicative)}</li>
          <li>{this.buildTable("Subjunctive", this.state.subjunctive)}</li>
          <li>{this.buildTable("Imperative", this.state.imperative)}</li>
        </ul>
      );
    }
  }
}

export default Conjugations;