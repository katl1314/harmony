// 메인 & 서브 컴포넌트 묶어서 해보자.
import SummaryBody from '@components/Summary/SummaryBody';

import SummaryFooter from '@components/Summary/SummaryFooter';
import SummaryCategoryView from '@components/Summary/SummaryCategoryView';
import SummaryHeader from '@components/Summary/SummaryHeader';
import SummaryLikeView from '@src/components/Summary/SummaryLikeView';

export const Summary = Object.assign(
	{},
	{
		Header: SummaryHeader,
		Body: SummaryBody,
		Footer: SummaryFooter,
		CategoryView: SummaryCategoryView,
		LikeView: SummaryLikeView,
	}
);
