import React, { forwardRef, useState, useRef } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { EditorState } from 'draft-js';
// convertToRaw로 변환된 원시 JS구조를 HTML문서로 변환함.
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
const MyBlock = styled.div`
	.wrapper-class {
		width: 100%;
		margin: 0 auto;
		margin-bottom: 4rem;
	}
	.editor {
		height: 500px !important;
		border: 1px solid #f1f1f1 !important;
		padding: 5px !important;
		border-radius: 2px !important;
	}
`;

const TestEditorForm = forwardRef((props, ref) => {
	// useState로 상태관리하기 초기값은 EditorState.createEmpty()
	// EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const onEditorStateChange = (editorState: EditorState) => {
		// editorState에 값 설정
		setEditorState(editorState);
		// editorState의 현재 contentState를 원시 JS으로 변환(convertToRaw)하고, HTML태그로 변환함.
		const convertedData = draftToHtml(
			convertToRaw(editorState.getCurrentContent())
		);
		console.log(convertedData.split('\n'));
	};

	return (
		<MyBlock>
			<Editor
				// 에디터와 툴바 모두에 적용되는 클래스
				wrapperClassName="wrapper-class"
				// 에디터 주변에 적용된 클래스
				editorClassName="editor"
				// 툴바 주위에 적용된 클래스
				toolbarClassName="toolbar-class"
				// 툴바 설정
				toolbar={{
					// inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
					inDropdown: false,
					options: ['inline', 'fontSize', 'fontFamily', 'image'],
				}}
				placeholder="내용을 작성해주세요."
				// 한국어 설정
				localization={{
					locale: 'ko',
				}}
				// 초기값 설정
				editorState={editorState}
				// 에디터의 값이 변경될 때마다 onEditorStateChange 호출
				onEditorStateChange={onEditorStateChange}
			/>
		</MyBlock>
	);
});

export default TestEditorForm;
