import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-wordclouds',
  templateUrl: './question-wordclouds.component.html',
  styleUrls: ['./question-wordclouds.component.scss'],
})
export class QuestionWordcloudsComponent implements OnInit {
  questionWordclouds = [
    {
      question: 'Do you have other climate mitigation ideas? Submit here:',
      wordcloud:
        '../../../../../assets/results/wordclouds_question/Q_MITIGATION.png',
      wordcloud_pos:
        '../../../../../assets/results/wordclouds_question/Q_MITIGATION_POS.png',
      wordcloud_neg:
        '../../../../../assets/results/wordclouds_question/Q_MITIGATION_NEG.png',
    },
    {
      question:
        'Do you have other ideas for environmental equity, justice, and community resilience? Submit here:',
      wordcloud:
        '../../../../../assets/results/wordclouds_question/Q_EQUITY.png',
      wordcloud_pos:
        '../../../../../assets/results/wordclouds_question/Q_EQUITY_POS.png',
      wordcloud_neg:
        '../../../../../assets/results/wordclouds_question/Q_EQUITY_NEG.png',
    },
    {
      question: 'Do you have other policy ideas? Submit here:',
      wordcloud:
        '../../../../../assets/results/wordclouds_question/Q_POLICY.png',
      wordcloud_pos:
        '../../../../../assets/results/wordclouds_question/Q_POLICY_POS.png',
      wordcloud_neg:
        '../../../../../assets/results/wordclouds_question/Q_POLICY_NEG.png',
    },
    {
      question:
        'Are you interested in participating in any other ways to help make Tucson environmentally sustainable? Submit here:',
      wordcloud:
        '../../../../../assets/results/wordclouds_question/Q_SUSTAINABLE.png',
      wordcloud_pos:
        '../../../../../assets/results/wordclouds_question/Q_SUSTAINABLE_POS.png',
      wordcloud_neg:
        '../../../../../assets/results/wordclouds_question/Q_SUSTAINABLE_NEG.png',
    },
    {
      question:
        'Is there anything else you would like to share that was not already addressed?',
      wordcloud:
        '../../../../../assets/results/wordclouds_question/Q_OTHER.png',
      wordcloud_pos:
        '../../../../../assets/results/wordclouds_question/Q_OTHER_POS.png',
      wordcloud_neg:
        '../../../../../assets/results/wordclouds_question/Q_OTHER_NEG.png',
    },
    {
      question: 'Do you have other climate adaptation ideas? Submit here:',
      wordcloud:
        '../../../../../assets/results/wordclouds_question/Q_ADAPTATION.png',
      wordcloud_pos:
        '../../../../../assets/results/wordclouds_question/Q_ADAPTATION_POS.png',
      wordcloud_neg:
        '../../../../../assets/results/wordclouds_question/Q_ADAPTATION_NEG.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
