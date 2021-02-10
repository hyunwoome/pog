export default function Notices(req, res) {
	res.status(200).json([
		{
			id: 1,
			title: '카카오페이 시스템 점검에 따른 이용제한 안내',
			date: '2020.02.25',
			content: '안녕하세요. 프라이드 오브 골프입니다.',
		},
		{
			id: 2,
			title: '프라이드 오브 골프 오픈 이벤트',
			date: '2020.02.10',
			content: '안녕하세요. 프라이드 오브 골프입니다.',
		},
	]);
}
