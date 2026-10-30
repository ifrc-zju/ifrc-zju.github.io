/* Research narrative, reviewed 2026-10-30. Publication evidence and limits are kept together.
 * Institutional names and people records remain in content.js. */
(function () {
  'use strict';
  var copy = {
    zh: {
      title: '大模型与智能体安全及可信治理', intro: '研究模型来源如何验证、生成结果如何可靠、智能体行动如何受到约束。',
      about: '我们围绕大模型与智能体在开放环境中的安全与可信问题开展研究，关注模型及内容的来源验证、安全约束的失效机理、生成结果对证据的遵循，以及与外部信息、工具和环境交互时的风险。通过模型内部分析、攻击与防御研究和系统化评测，为智能体全生命周期治理探索可验证的证据与可执行的控制机制。',
      relation: '来源可验证、回答有依据、行动受约束，是相互补充的研究目标。模型来源验证不替代内容判断，遵循证据不等于证据真实，交互攻击检测也不等于完整的执行安全保证。',
      titles: ['模型与内容可信验证','大模型安全机理与可靠生成','智能体交互与执行安全'],
      questions: ['模型来自哪里，内容是否真实？','风险如何形成，回答是否可信？','任务如何执行，行为是否越界？'],
      bodies: ['模型经过微调、压缩或再次分发后，如何验证其来源？我们研究模型指纹、衍生关系验证与深度伪造检测，关注指纹在模型变化和主动擦除下的稳定性，以及检测方法面对未知伪造方式的泛化能力。','安全训练后的模型仍可能失效，检索到证据也不一定能正确使用。我们分析参数、内部表征与输出行为的联系，识别安全约束的脆弱性和检索证据与模型记忆的冲突，并研究生成过程干预。','网页、工具描述与返回内容可能夹带恶意指令，影响智能体的任务理解和后续行动。我们研究提示注入、工具投毒及交互攻击，分析风险如何进入任务流程，并评估检测效果与任务完成情况。'],
      established: ['模型指纹与来源比对；指纹擦除压力测试；跨伪造方法检测。','安全失对齐分析；RAG 幻觉检测；证据忠实生成与相关评测。','MCP 交互攻击检测；恶意链接评测；具身与协作系统风险分析。'],
      future: ['进一步研究不同模型变换与访问条件下的来源证据稳定性。','探索风险信号与干预策略的联系，联合评估忠实度、质量与开销。','探索意图与行为一致性、动态权限、工具收据及运行时执行约束。'],
      labels: ['已有研究基础','进一步探索','代表成果','查看相关论文','研究定位','论文与资源','合作与加入','全部方向','相关研究积累','按题目、作者或会议检索','全部论文','暂无匹配论文'],
      featuredIntro: '从具体研究问题出发，了解方法、贡献与适用边界。',
      limits: ['白盒模型访问；不修改模型权重。','指纹擦除攻击与鲁棒性评估。','合作研究；针对人脸伪造检测。','提高对给定证据的忠实度，不验证证据本身。','针对交互语义攻击；不等同于完整权限隔离。','灰盒访问；需要概率信号。'],
      contributions: ['以差分注意力和谱描述子比较模型衍生关系。','通过擦除与恢复两阶段评估后门指纹的保护边界。','以图像分解和跨视图蒸馏学习互补伪造线索。','融合多层次信号，逐 token 调整对比解码的干预强度。','结合静态扫描、语义检测与认知仲裁，识别工具交互中的攻击。','以自然语言记忆嵌入指纹，通过校准概率变化追踪模型来源。'],
      join: '欢迎围绕模型来源验证、可靠生成与智能体交互安全开展学术交流和研究合作。有意参与研究的同学，可发送个人简介、研究兴趣与相关经历。',
      contact: ['研究合作','加入团队'], note: '按研究主题查看论文；预印本与正式发表分开展示。相关研究积累包含成员及合作研究，具体贡献以论文作者和署名为准。', accepted: '已录用', published: '已发表', preprint: '预印本', details: '研究问题与技术思路'
    },
    en: {
      title: 'Security and trustworthy governance of LLMs and agents', intro: 'Verifying model provenance. Grounding generation in evidence. Constraining agent actions.',
      about: 'We study security and trust in large language models and agents operating in open environments. Our work investigates model provenance and synthetic content, failures of safety alignment, evidence-grounded generation, and risks arising from interactions with external information and tools. Through analysis of model internals, attack and defense research, and systematic evaluation, we explore verifiable evidence and actionable controls for agent lifecycle governance.',
      relation: 'Verified provenance, evidence-grounded answers, and constrained actions are complementary goals. Model provenance does not establish content accuracy; faithfulness does not establish evidence truth; attack detection does not guarantee end-to-end execution safety.',
      titles: ['Model and content verification','LLM safety mechanisms and reliable generation','Agent interaction and execution security'], questions: ['Where did the model come from? Is the content authentic?','How do risks emerge? Does the answer follow evidence?','How is the task executed? Do actions exceed authorization?'],
      bodies: ['We study model fingerprints, derivative provenance and deepfake detection. Key challenges include fingerprint stability after model modification and deliberate erasure, and detection that generalizes to unfamiliar forgery methods.','We examine how parameters and internal representations relate to safety failures and conflicts between retrieved evidence and model memory. Detection and decoding interventions are evaluated jointly for faithfulness, quality and overhead.','External pages, tool descriptions and tool responses can carry malicious instructions. We study prompt injection, tool poisoning and interaction attacks, tracing how risks enter task workflows and affect subsequent actions.'],
      established: ['Model fingerprinting and provenance comparison; erasure evaluation; deepfake detection.','Safety disalignment analysis; RAG hallucination detection; evidence-faithful generation.','MCP attack detection; malicious URL evaluation; embodied and cooperative system risk analysis.'],
      future: ['Investigate evidence stability across model transformations and access conditions.','Connect risk signals to interventions while evaluating utility and computational cost.','Explore intent–behavior consistency, dynamic permissions, tool receipts and runtime constraints.'],
      labels: ['Research foundations','Further exploration','Selected research','Related publications','Research focus','Publications & resources','Collaborate & join','All directions','Related research','Search title, author or venue','All publications','No matching publications'], featuredIntro: 'Explore the problem, contribution and scope of selected studies.',
      contributions: ['Compare model derivatives using differential attention and compact spectral descriptors.','Evaluate backdoor fingerprint resilience through erasure and capability recovery.','Learn complementary forgery cues through image decomposition and cross-view distillation.','Adjust contrastive decoding at each token using signals from multiple model depths.','Combine static scanning, semantic detection and cognitive arbitration for tool interactions.','Embed provenance signals through natural-language memorization and calibrated probability changes.'],
      limits: ['White-box model access; no weight modification.','An attack and robustness evaluation study.','Collaborative research on facial forgery detection.','Faithfulness to supplied evidence does not verify that evidence.','Semantic attack detection is not full permission isolation.','Gray-box access requires probability signals.'],
      join: 'We welcome academic exchange and research collaboration on model provenance, reliable generation and agent interaction security. Prospective researchers can share a short introduction, research interests and relevant experience.', contact: ['Research collaboration','Join the team'], note: 'Browse by research topic. Preprints and formal publications are distinguished. Related research includes member and collaborative work; contributions follow each paper’s authorship.', accepted: 'Accepted', published: 'Published', preprint: 'Preprint', details: 'Research questions and approach'
    }
  };
  // All six language selections use the same research scope. English paper titles remain canonical.
  var localized = {
    zhtw: ['大模型與智慧體安全及可信治理','驗證模型來源、提升生成可靠性、約束智慧體行動。',['模型與內容可信驗證','大模型安全機理與可靠生成','智慧體互動與執行安全'],['模型來自哪裡，內容是否真實？','風險如何形成，回答是否可信？','任務如何執行，行為是否越界？'],['研究模型指紋、衍生關係與深度偽造檢測，關注模型修改與主動擦除後的證據穩定性。','分析安全對齊失效與檢索證據和模型記憶的衝突，研究風險檢測及生成干預。','研究提示注入、工具投毒與惡意連結，分析外部內容對任務和行動的影響。'],['已有研究基礎','進一步探索','代表成果','查看相關論文','研究定位','論文與資源','合作與加入','全部方向','相關研究積累','搜尋題目、作者或會議','全部論文','沒有符合條件的論文']],
    ja: ['大規模言語モデルとエージェントの安全性・信頼性','モデルの出自を検証し、生成を根拠に結び付け、行動を制御する。',['モデルとコンテンツの検証','LLMの安全機構と信頼できる生成','エージェントの対話・実行安全性'],['モデルの出自とコンテンツの真正性は？','リスクはなぜ生じ、回答は根拠に沿っているか？','タスク実行は権限の範囲内か？'],['モデル指紋、派生モデルの出自、ディープフェイク検出を研究し、モデル変更や指紋消去への頑健性を評価します。','内部表現と安全性の失敗を分析し、検索証拠とモデル記憶の衝突検出および生成介入を研究します。','プロンプトインジェクション、ツール汚染、悪意あるURLを研究し、外部情報が後続の行動に与える影響を評価します。'],['研究基盤','今後の探索','代表的な研究','関連論文','研究概要','論文・リソース','連携・参加','すべての分野','関連研究','題名・著者・会議を検索','すべての論文','該当する論文はありません']],
    ko: ['대규모 언어 모델과 에이전트의 안전 및 신뢰 거버넌스','모델 출처를 검증하고, 근거에 충실한 생성을 연구하며, 에이전트 행동을 제약합니다.',['모델 및 콘텐츠 검증','LLM 안전 메커니즘과 신뢰할 수 있는 생성','에이전트 상호작용 및 실행 안전'],['모델의 출처와 콘텐츠의 진위를 어떻게 확인할까요?','위험은 어떻게 발생하며 답변은 근거에 충실할까요?','작업 수행이 권한 범위를 벗어나지는 않을까요?'],['모델 지문, 파생 모델 출처 및 딥페이크 탐지를 연구하며 모델 변형과 지문 제거에 대한 견고성을 평가합니다.','내부 표현과 안전 실패를 분석하고 검색 근거와 모델 기억의 충돌 탐지 및 생성 개입을 연구합니다.','프롬프트 주입, 도구 오염, 악성 URL을 연구하며 외부 정보가 작업과 후속 행동에 미치는 영향을 평가합니다.'],['연구 기반','향후 탐색','대표 연구','관련 논문','연구 소개','논문 및 자료','협력 및 참여','전체 분야','관련 연구','제목, 저자, 학술대회 검색','전체 논문','일치하는 논문이 없습니다']],
    th: ['ความปลอดภัยและการกำกับดูแลที่น่าเชื่อถือของโมเดลภาษาและเอเจนต์','ตรวจสอบที่มาของโมเดล สร้างคำตอบตามหลักฐาน และควบคุมการกระทำของเอเจนต์',['การตรวจสอบโมเดลและเนื้อหา','กลไกความปลอดภัยและการสร้างคำตอบที่เชื่อถือได้','ความปลอดภัยในการโต้ตอบและการทำงานของเอเจนต์'],['โมเดลมาจากไหน และเนื้อหาเป็นของจริงหรือไม่?','ความเสี่ยงเกิดอย่างไร และคำตอบสอดคล้องกับหลักฐานหรือไม่?','การทำงานอยู่ภายในขอบเขตสิทธิ์หรือไม่?'],['ศึกษาลายนิ้วมือโมเดล การตรวจสอบที่มาของโมเดลที่ดัดแปลง และการตรวจจับเนื้อหาปลอม โดยประเมินความทนทานต่อการเปลี่ยนแปลงและการลบลายนิ้วมือ','วิเคราะห์กลไกภายในที่ทำให้ข้อจำกัดด้านความปลอดภัยล้มเหลว และศึกษาการตรวจจับความขัดแย้งระหว่างหลักฐานกับความจำของโมเดลและการแทรกแซงการสร้างคำตอบ','ศึกษาการแทรกคำสั่ง การปนเปื้อนเครื่องมือ และ URL ที่เป็นอันตราย เพื่อประเมินผลของข้อมูลภายนอกต่อการทำงานและการกระทำต่อเนื่อง'],['พื้นฐานการวิจัย','แนวทางศึกษาต่อ','งานวิจัยเด่น','บทความที่เกี่ยวข้อง','ภาพรวมการวิจัย','บทความและทรัพยากร','ความร่วมมือและการเข้าร่วม','ทุกหัวข้อ','งานวิจัยที่เกี่ยวข้อง','ค้นหาชื่อ ผู้เขียน หรือการประชุม','บทความทั้งหมด','ไม่พบบทความ']]
  };
  Object.keys(localized).forEach(function (lang) {
    var a = localized[lang];
    copy[lang] = Object.assign({}, copy.en, { title:a[0], intro:a[1], titles:a[2], questions:a[3], bodies:a[4], labels:a[5] });
    // Detailed evidence notes are explicitly English, consistent with canonical publication records.
    copy[lang].evidenceLang = 'en';
    copy[lang].about = a[4].join(' ');
  });
  var evidenceTranslations = {"zhtw": {"relation": "來源驗證、依據證據生成與行動約束相互補充，三個板塊共同探索智慧體全生命週期治理。", "established": ["模型指紋與來源比對、擦除評估及偽造檢測。", "安全失對齊分析、RAG 幻覺檢測與忠實生成。", "MCP 攻擊檢測、惡意連結評測與具身安全分析。"], "future": ["探索不同模型變換與存取條件下的證據穩定性。", "探索風險訊號與生成干預的關係，評估品質與開銷。", "探索意圖校驗、動態權限、工具收據與執行約束。"], "contributions": ["以差分注意力與譜描述子比較模型衍生關係。", "透過擦除與能力恢復評估後門指紋的保護邊界。", "以圖像分解與跨視圖蒸餾學習互補偽造線索。", "融合多層次訊號，逐 token 調整對比解碼。", "結合靜態掃描、語義檢測與認知仲裁識別互動攻擊。", "利用自然語言記憶與校準機率追蹤模型來源。"], "limits": ["白盒存取；不修改模型權重。", "攻擊與穩健性評估研究。", "人臉偽造檢測合作研究。", "忠於給定證據不等於證據真實。", "語義攻擊檢測不等於完整權限隔離。", "灰盒存取，需要機率訊號。"], "join": "歡迎圍繞模型來源驗證、可靠生成與智慧體互動安全開展學術交流。參與研究可寄送個人簡介、研究興趣與相關經歷。", "contact": ["研究合作", "加入團隊"], "note": "依研究主題瀏覽論文，區分預印本與正式出版。相關積累包含成員及合作研究，具體貢獻以論文署名為準。", "featuredIntro": "了解代表工作的研究問題、技術貢獻與適用邊界。", "accepted": "已錄用", "published": "已發表", "preprint": "預印本", "details": "研究問題與技術思路"}, "ja": {"relation": "出自の検証、根拠に沿った生成、行動の制約を組み合わせ、エージェントのライフサイクル全体にわたる信頼性を研究します。", "established": ["モデル指紋、出自の比較、指紋消去の評価、偽造検出。", "安全性の失敗分析、RAGのハルシネーション検出と忠実な生成。", "MCP攻撃検出、悪意あるURLの評価、身体性・協調システムのリスク分析。"], "future": ["モデル変更やアクセス条件に対する証拠の安定性を探究します。", "リスク信号と生成介入の関係、品質と計算コストを評価します。", "意図の照合、動的権限、ツール実行の証跡、実行時制約を探究します。"], "contributions": ["差分注意とスペクトル特徴によりモデルの派生関係を比較。", "指紋消去と能力回復により保護機構の限界を評価。", "画像分解とクロスビュー蒸留により偽造の手掛かりを学習。", "複数深度の信号からトークンごとの対照デコーディングを調整。", "静的検査、意味検出、モデルによる判定で対話攻撃を検出。", "自然言語の記憶と較正した確率信号で出自を追跡。"], "limits": ["ホワイトボックスアクセス。重みの変更不要。", "攻撃と頑健性の評価研究。", "顔画像の偽造検出に関する共同研究。", "証拠への忠実性は証拠自体の真実性を保証しません。", "意味的攻撃の検出は完全な権限分離ではありません。", "確率信号を必要とするグレーボックス手法。"], "join": "モデルの出自、信頼できる生成、エージェントの対話安全性について共同研究を歓迎します。参加希望の方は自己紹介、研究関心、関連経験をお送りください。", "contact": ["研究連携", "チームに参加"], "note": "研究分野別に論文を閲覧できます。プレプリントと正式出版を区別し、共同研究の貢献は各論文の著者情報に従います。", "featuredIntro": "代表的な研究の課題、貢献、適用範囲をご覧ください。", "accepted": "採択", "published": "出版済み", "preprint": "プレプリント", "details": "研究課題とアプローチ"}, "ko": {"relation": "출처 검증, 근거에 충실한 생성, 행동 제약을 함께 연구하여 에이전트 생애주기 전반의 신뢰성을 탐구합니다.", "established": ["모델 지문과 출처 비교, 지문 제거 평가, 위조 탐지.", "안전 정렬 실패 분석, RAG 환각 탐지와 충실한 생성.", "MCP 공격 탐지, 악성 URL 평가, 체화 및 협력 시스템 위험 분석."], "future": ["모델 변형과 접근 조건에 따른 증거 안정성을 탐구합니다.", "위험 신호와 생성 개입의 관계 및 품질과 비용을 평가합니다.", "의도 검증, 동적 권한, 도구 실행 증빙과 실행 제약을 탐구합니다."], "contributions": ["차분 어텐션과 스펙트럼 특징으로 모델 파생 관계를 비교합니다.", "지문 제거와 능력 복구를 통해 보호 기법의 한계를 평가합니다.", "이미지 분해와 교차 뷰 증류로 상호 보완적인 위조 단서를 학습합니다.", "여러 깊이의 신호로 토큰별 대조 디코딩을 조정합니다.", "정적 검사, 의미 탐지와 모델 중재를 결합해 상호작용 공격을 탐지합니다.", "자연어 기억과 보정된 확률 신호로 모델 출처를 추적합니다."], "limits": ["화이트박스 접근, 가중치 변경 불필요.", "공격 및 견고성 평가 연구.", "얼굴 위조 탐지 공동 연구.", "근거 충실성이 근거 자체의 진실성을 보장하지는 않습니다.", "의미 공격 탐지는 완전한 권한 격리가 아닙니다.", "확률 신호가 필요한 그레이박스 접근."], "join": "모델 출처, 신뢰할 수 있는 생성, 에이전트 상호작용 안전에 관한 학술 교류를 환영합니다. 연구 참여를 희망하시면 소개, 연구 관심사와 관련 경험을 보내주세요.", "contact": ["연구 협력", "팀 참여"], "note": "연구 주제별로 논문을 탐색할 수 있습니다. 프리프린트와 정식 출판을 구분하며 공동 연구 기여는 각 논문의 저자 정보를 따릅니다.", "featuredIntro": "대표 연구의 문제, 기여와 적용 범위를 살펴보세요.", "accepted": "게재 승인", "published": "출판됨", "preprint": "프리프린트", "details": "연구 문제와 접근법"}, "th": {"relation": "การตรวจสอบที่มา การสร้างคำตอบตามหลักฐาน และการควบคุมการกระทำ เป็นเป้าหมายที่เสริมกันในการวิจัยเอเจนต์ที่น่าเชื่อถือ", "established": ["ลายนิ้วมือและที่มาของโมเดล การประเมินการลบลายนิ้วมือ และการตรวจจับเนื้อหาปลอม", "การวิเคราะห์ความล้มเหลวด้านความปลอดภัย การตรวจจับคำตอบหลอนใน RAG และการสร้างคำตอบตามหลักฐาน", "การตรวจจับการโจมตี MCP การประเมิน URL อันตราย และความเสี่ยงของระบบที่ทำงานร่วมกัน"], "future": ["ศึกษาความคงทนของหลักฐานเมื่อโมเดลและเงื่อนไขการเข้าถึงเปลี่ยนไป", "ศึกษาสัญญาณความเสี่ยงและการแทรกแซง พร้อมประเมินคุณภาพและต้นทุน", "ศึกษาความสอดคล้องของเจตนา สิทธิ์แบบพลวัต หลักฐานการใช้เครื่องมือ และข้อจำกัดขณะทำงาน"], "contributions": ["เปรียบเทียบความสัมพันธ์ของโมเดลด้วยความต่างของ attention และลักษณะเชิงสเปกตรัม", "ประเมินขอบเขตการป้องกันด้วยการลบลายนิ้วมือและฟื้นฟูความสามารถ", "เรียนรู้ร่องรอยการปลอมด้วยการแยกภาพและการกลั่นความรู้ข้ามมุมมอง", "ปรับการถอดรหัสแบบเปรียบต่างทีละโทเคนด้วยสัญญาณหลายระดับ", "ผสานการตรวจสอบแบบคงที่ การตรวจจับเชิงความหมาย และการตัดสินด้วยโมเดล", "ติดตามที่มาด้วยความจำภาษาธรรมชาติและสัญญาณความน่าจะเป็นที่ปรับเทียบ"], "limits": ["ต้องเข้าถึงภายในโมเดล โดยไม่แก้น้ำหนัก", "งานวิจัยการโจมตีและการประเมินความทนทาน", "งานวิจัยร่วมด้านการตรวจจับใบหน้าปลอม", "การทำตามหลักฐานไม่ได้ยืนยันว่าหลักฐานเป็นจริง", "การตรวจจับเชิงความหมายไม่ใช่การแยกสิทธิ์อย่างสมบูรณ์", "ต้องเข้าถึงสัญญาณความน่าจะเป็นของโมเดล"], "join": "ยินดีแลกเปลี่ยนและร่วมวิจัยด้านที่มาของโมเดล การสร้างคำตอบที่น่าเชื่อถือ และความปลอดภัยของเอเจนต์ ผู้สนใจสามารถส่งประวัติย่อ ความสนใจวิจัย และประสบการณ์ที่เกี่ยวข้อง", "contact": ["ความร่วมมือวิจัย", "เข้าร่วมทีม"], "note": "เรียกดูบทความตามหัวข้อ โดยแยกฉบับก่อนตีพิมพ์และฉบับเผยแพร่ ผลงานร่วมให้อ้างอิงบทบาทจากรายชื่อผู้เขียนของแต่ละบทความ", "featuredIntro": "สำรวจปัญหา ผลงาน และขอบเขตการใช้งานของงานวิจัยเด่น", "accepted": "ตอบรับแล้ว", "published": "เผยแพร่แล้ว", "preprint": "ก่อนตีพิมพ์", "details": "คำถามและแนวทางวิจัย"}};
  Object.keys(evidenceTranslations).forEach(function(lang){Object.assign(copy[lang],evidenceTranslations[lang]); delete copy[lang].evidenceLang;});
  // Research agenda: grounded in the current direction deck and the evidence draft.
  // Cross-stage integration is a future research goal, not an existing deployed platform.
  var agenda = {
    zh: {
      visionLabel: '我们的愿景', visionTitle: '让大模型与智能体可信有据、行动可控',
      vision: '面向能够可靠服务于人的智能系统，我们研究从模型来源、内容生成到工具执行的安全与可信问题，围绕可信验证、可靠生成与执行安全，为智能体全生命周期治理提供可验证的证据与可执行的控制机制。',
      whyTitle: '为什么研究这些问题', why: '人工智能正从“生成回答”走向“调用工具、执行任务”。来源不明的模型、偏离证据的回答和夹带恶意指令的外部内容，都可能影响后续决策，并在多步交互中累积风险。可信性需要贯穿信息进入、模型生成与实际行动。',
      mapLabel: '研究主线', mapTitle: '从可信证据，到可靠生成，再到安全行动',
      relation: '三个方向围绕同一个问题展开：当智能体使用模型、理解信息并采取行动时，我们如何判断它是否值得信任，并在风险出现时施加有效约束？',
      steps: [
        ['验证来源与真实性', '研究模型来自哪里、内容是否经过合成或伪造，为后续使用提供来源与真实性证据。', '模型与内容'],
        ['理解风险与改善生成', '研究安全约束为何失效、回答为何偏离证据，把风险分析与生成过程干预联系起来。', '推理与生成'],
        ['识别攻击与约束行动', '研究外部信息和工具如何影响任务执行，从交互攻击检测走向行为与权限约束。', '交互与执行']
      ],
      feedback: '三个方向的衔接目标：让来源证据服务于信息使用，让生成中的风险信号服务于行动约束，再用交互中暴露的失败案例反向检验验证和生成方法。',
      workLabel: '我们正在研究什么', currentLabel: '已有研究基础', nextLabel: '下一步研究',
      current: [
        ['模型指纹与衍生关系比对，研究来源证据的提取与验证。', '通过指纹擦除与能力恢复，评估保护方法的鲁棒性边界。', '通过图像分解和跨视图学习，研究未知伪造方式下的检测能力。'],
        ['分析参数与内部表征，揭示安全对齐的脆弱性与失效条件。', '比较有无检索上下文的模型行为，识别证据与参数记忆的冲突。', '结合多层次模型信号干预解码，提高回答对给定证据的忠实度。'],
        ['研究 MCP 工具交互中的提示注入、工具投毒与分层检测。', '研究恶意链接和网页内容如何改变智能体行为，并开展攻击评测。', '梳理具身系统风险，分析指令执行与协作中的对抗问题。']
      ],
      next: ['进一步研究微调、压缩及主动擦除后的证据稳定性，评估不同访问条件与未知伪造场景下的可靠程度。', '进一步连接风险识别与生成干预，分析何时应信任证据、何时需要调整生成，并联合评估安全性、忠实度和开销。', '在交互攻击检测基础上，探索任务意图与实际行为的一致性、动态权限和运行时控制，研究风险识别如何转化为执行约束。'],
      outlookLabel: '未来研究议程', outlookTitle: '把单点方法逐步连接成贯穿任务过程的可信机制',
      outlookIntro: '基于已有论文与评测基础，我们希望进一步研究以下跨方向问题。这些是后续探索目标，将通过原型与实验逐步检验。',
      outlook: [
        ['关联不同阶段的证据', '探索如何把模型来源、检索依据、生成风险与工具交互记录联系起来，形成可追溯、可复核的任务证据。'],
        ['从发现风险走向约束行动', '研究风险信号如何参与工具调用和权限决策，让检测结果能够触发与任务相适应的干预。'],
        ['在变化中持续检验可信性', '面向模型更新、环境变化和多步任务，联合评估安全效果、任务完成能力与运行开销，并用失败案例改进方法。']
      ]
    },
    en: {
      visionLabel: 'Our vision', visionTitle: 'Verifiable trust and controllable behavior in LLMs and agents',
      vision: 'We study security and trust from model provenance and content generation to tool execution. Through verification, reliable generation and execution security, we aim to provide verifiable evidence and actionable controls for agent lifecycle governance.',
      whyTitle: 'Why these questions matter', why: 'AI is moving from producing answers to using tools and carrying out tasks. Uncertain model origins, answers that depart from evidence and malicious external instructions can affect later decisions and compound across interactions. Trust must span information intake, generation and action.',
      mapLabel: 'How the research connects', mapTitle: 'From trustworthy evidence to reliable generation and safe action',
      relation: 'The three directions address one shared question: as agents use models, interpret information and act, how can we assess trustworthiness and intervene when risks emerge?',
      steps: [['Verify provenance and authenticity','Establish evidence about where models come from and whether content has been synthesized or manipulated.','Models & content'],['Understand risk and improve generation','Connect analysis of safety failures and departures from evidence to interventions during generation.','Reasoning & generation'],['Detect attacks and constrain actions','Study how external information and tools affect execution, extending attack detection toward behavioral and permission constraints.','Interaction & execution']],
      feedback: 'Our integration goal is to connect provenance evidence to information use, generation risk signals to action constraints, and failures observed during interaction back to verification and generation research.',
      workLabel: 'What we study', currentLabel: 'Established research', nextLabel: 'Next research questions',
      current: [['Model fingerprints and derivative comparison for provenance verification.','Fingerprint erasure and capability recovery to evaluate protection limits.','Image decomposition and cross-view learning for unfamiliar forgery methods.'],['Parameter and representation analysis to investigate alignment fragility.','Behavior comparisons with and without retrieval context to detect evidence–memory conflicts.','Multi-level model signals for decoding interventions that improve evidence faithfulness.'],['Prompt injection, tool poisoning and layered detection in MCP interactions.','Malicious links and web content as attack surfaces, with corresponding evaluations.','Risk analysis in embodied systems, adversarial instruction execution and cooperation.']],
      next: ['Study evidence stability after fine-tuning, compression and deliberate erasure, across access conditions and unfamiliar forgeries.','Connect risk detection to interventions, studying when to rely on evidence and when to adjust generation while evaluating safety, faithfulness and cost.','Extend interaction attack detection toward intent–behavior consistency, dynamic permissions and runtime controls.'],
      outlookLabel: 'Future research agenda', outlookTitle: 'Connecting individual methods across the course of a task',
      outlookIntro: 'Building on our papers and evaluations, we aim to investigate these cross-direction questions through future prototypes and experiments.',
      outlook: [['Connect evidence across stages','Explore how model provenance, retrieved evidence, generation risks and tool records can form a traceable, reviewable account of a task.'],['Turn risk detection into action constraints','Study how risk signals can inform tool use and permission decisions, triggering interventions appropriate to the task.'],['Re-evaluate trust as systems change','Evaluate safety, task completion and cost across model updates, environment changes and multi-step tasks, using failures to refine methods.']]
    },
    zhtw: {
      visionLabel:'我們的願景', visionTitle:'讓大模型與智慧體可信有據、行動可控',
      vision:'面向能夠可靠服務於人的智慧系統，我們研究從模型來源、內容生成到工具執行的安全與可信問題，透過可信驗證、可靠生成與執行安全，為智慧體全生命週期治理提供可驗證的證據與可執行的控制機制。',
      whyTitle:'為什麼研究這些問題', why:'人工智慧正從生成回答走向呼叫工具、執行任務。來源不明的模型、偏離證據的回答與惡意外部指令，都可能影響後續決策並累積風險。可信性需要貫穿資訊輸入、模型生成與實際行動。',
      mapLabel:'研究主線', mapTitle:'從可信證據，到可靠生成，再到安全行動', relation:'三個方向共同研究：當智慧體使用模型、理解資訊並採取行動時，如何判斷其可信程度，並在風險出現時施加有效約束？',
      steps:[['驗證來源與真實性','研究模型來源與內容合成、偽造問題，為後續使用提供可核驗的證據。','模型與內容'],['理解風險與改善生成','分析安全約束失效與回答偏離證據的原因，研究生成過程干預。','推理與生成'],['識別攻擊與約束行動','研究外部資訊和工具如何影響任務，從攻擊檢測走向行為與權限約束。','互動與執行']],
      feedback:'銜接目標：讓來源證據服務於資訊使用，讓生成風險信號服務於行動約束，再以互動中的失敗案例改進驗證與生成方法。',
      workLabel:'我們正在研究什麼', currentLabel:'已有研究基礎', nextLabel:'下一步研究',
      current:[['模型指紋與衍生關係比對，提取和驗證來源證據。','透過指紋擦除與能力恢復，評估保護方法的邊界。','透過影像分解與跨視圖學習，研究未知偽造方式的檢測。'],['透過參數與內部表徵分析安全對齊脆弱性。','比較有無檢索上下文的行為，識別證據與模型記憶衝突。','利用多層次信號干預解碼，提高對給定證據的忠實度。'],['MCP 互動中的提示注入、工具投毒與分層檢測。','惡意連結與網頁攻擊，以及相應行為評測。','具身系統風險梳理、指令執行與協作中的對抗問題。']],
      next:['研究微調、壓縮和擦除後的證據穩定性，評估不同存取條件與未知偽造場景。','連接風險識別與生成干預，聯合評估安全性、證據忠實度與開銷。','探索任務意圖與行為一致性、動態權限和執行時控制。'],
      outlookLabel:'未來研究議程', outlookTitle:'把單點方法逐步連接成貫穿任務的可信機制', outlookIntro:'基於已有論文與評測基礎，以下跨方向問題將作為後續探索目標，透過原型與實驗逐步檢驗。',
      outlook:[['關聯不同階段的證據','探索模型來源、檢索依據、生成風險與工具紀錄的關聯，形成可追溯、可複核的任務證據。'],['從發現風險走向約束行動','研究風險信號如何參與工具呼叫和權限決策，觸發適合任務的干預。'],['在變化中持續檢驗可信性','面向模型更新、環境變化與多步任務，聯合評估安全、任務能力與開銷，以失敗案例改進方法。']]
    },
    ja: {
      visionLabel:'私たちの目標', visionTitle:'検証できる信頼性と制御できるエージェント行動',
      vision:'モデルの出自、コンテンツ生成、ツール実行にわたる安全性を研究します。検証、信頼できる生成、実行安全性を通じ、エージェントのライフサイクル全体に検証可能な証拠と実行可能な制御を提供することを目指します。',
      whyTitle:'なぜこの課題に取り組むのか', why:'AIは回答の生成からツール利用とタスク実行へと進んでいます。出自の不明なモデル、証拠から逸脱する回答、悪意ある外部指示は、その後の判断に影響し、複数の対話にわたってリスクを蓄積させます。',
      mapLabel:'研究のつながり', mapTitle:'信頼できる証拠から、根拠に沿った生成、安全な行動へ', relation:'モデルを使い、情報を理解し、行動するエージェントの信頼性をどう評価し、リスク発生時にどう介入するか。この共通課題を三つの方向から研究します。',
      steps:[['出自と真正性を検証','モデルの出自やコンテンツの合成・改変について、確認可能な証拠を研究します。','モデル・コンテンツ'],['リスクを理解し生成を改善','安全性の失敗と証拠からの逸脱を分析し、生成中の介入につなげます。','推論・生成'],['攻撃を検出し行動を制約','外部情報とツールの影響を研究し、攻撃検出から行動・権限制約へ発展させます。','対話・実行']],
      feedback:'出自の証拠を情報利用へ、生成中のリスク信号を行動制約へ結び付け、対話中の失敗を検証・生成研究へ還元することを目指します。',
      workLabel:'現在の研究', currentLabel:'これまでの研究基盤', nextLabel:'今後の研究課題',
      current:[['モデル指紋と派生関係の比較による出自検証。','指紋消去と能力回復による保護の限界評価。','画像分解とクロスビュー学習による未知の偽造検出。'],['パラメータと内部表現から安全アラインメントの脆弱性を分析。','検索文脈の有無による比較で証拠とモデル記憶の衝突を検出。','複数深度の信号を用いたデコーディング介入で証拠への忠実性を改善。'],['MCPでのプロンプトインジェクション、ツール汚染、階層的検出。','悪意あるURLやウェブ内容による攻撃と評価。','身体性システムのリスク分類、指示実行・協調での敵対的問題。']],
      next:['微調整・圧縮・指紋消去後の証拠の安定性を、アクセス条件や未知の偽造に対して評価します。','リスク検出と生成介入を結び付け、安全性、忠実性、計算コストを共同評価します。','意図と行動の整合、動的権限、実行時制御を探究します。'],
      outlookLabel:'将来の研究課題', outlookTitle:'個別の手法をタスク全体の信頼性へつなぐ', outlookIntro:'既存の論文と評価を基に、以下の横断的課題を今後の試作と実験で検証していきます。',
      outlook:[['段階をまたぐ証拠の関連付け','出自、検索証拠、生成リスク、ツール記録を結び付け、追跡・検証可能なタスク記録を研究します。'],['検出から行動制約へ','リスク信号をツール利用と権限判断に反映し、タスクに適した介入を行う方法を研究します。'],['変化に応じた継続評価','モデル更新、環境変化、複数段階のタスクで安全性、達成能力、コストを評価し、失敗から改善します。']]
    },
    ko: {
      visionLabel:'우리의 비전', visionTitle:'검증할 수 있는 신뢰성과 제어할 수 있는 에이전트 행동',
      vision:'모델 출처와 콘텐츠 생성부터 도구 실행까지 안전과 신뢰를 연구합니다. 검증, 신뢰할 수 있는 생성, 실행 안전을 통해 에이전트 생애주기 거버넌스에 검증 가능한 증거와 실행 가능한 제어를 제공하고자 합니다.',
      whyTitle:'왜 이 문제를 연구할까요', why:'AI는 답변 생성에서 도구 사용과 작업 실행으로 발전하고 있습니다. 불분명한 모델 출처, 근거에서 벗어난 답변, 악성 외부 지시는 이후 판단에 영향을 주며 여러 단계에서 위험을 누적시킬 수 있습니다.',
      mapLabel:'연구 간의 연결', mapTitle:'신뢰할 수 있는 증거에서 충실한 생성과 안전한 행동으로', relation:'세 방향은 하나의 질문을 공유합니다. 모델을 사용하고 정보를 이해하며 행동하는 에이전트의 신뢰성을 어떻게 평가하고 위험이 발생할 때 어떻게 개입할까요?',
      steps:[['출처와 진위 검증','모델 출처와 콘텐츠 합성·변조에 관한 검증 가능한 증거를 연구합니다.','모델과 콘텐츠'],['위험 이해와 생성 개선','안전 실패와 근거 이탈을 분석하고 생성 과정의 개입과 연결합니다.','추론과 생성'],['공격 탐지와 행동 제약','외부 정보와 도구의 영향을 연구하여 공격 탐지에서 행동·권한 제약으로 확장합니다.','상호작용과 실행']],
      feedback:'출처 증거를 정보 사용에, 생성 위험 신호를 행동 제약에 연결하고, 상호작용의 실패 사례를 검증과 생성 연구에 반영하는 것이 연결 목표입니다.',
      workLabel:'현재 연구하는 문제', currentLabel:'축적된 연구 기반', nextLabel:'다음 연구 과제',
      current:[['모델 지문과 파생 관계 비교를 통한 출처 검증.','지문 제거와 능력 복구를 통한 보호 한계 평가.','이미지 분해와 교차 뷰 학습을 통한 새로운 위조 방식 탐지.'],['파라미터와 내부 표현을 통한 안전 정렬 취약성 분석.','검색 문맥 유무에 따른 행동 비교로 근거와 모델 기억의 충돌 탐지.','다층 신호를 활용한 디코딩 개입으로 근거 충실도 개선.'],['MCP의 프롬프트 주입, 도구 오염과 계층적 탐지.','악성 링크 및 웹 콘텐츠 공격과 평가.','체화 시스템 위험 분류와 지시 실행·협력의 적대적 문제 분석.']],
      next:['미세 조정, 압축과 지문 제거 후의 증거 안정성을 접근 조건과 새로운 위조 환경에서 평가합니다.','위험 탐지와 생성 개입을 연결하고 안전성, 충실도, 비용을 함께 평가합니다.','의도와 행동의 일치, 동적 권한과 실행 시 제어를 탐구합니다.'],
      outlookLabel:'향후 연구 의제', outlookTitle:'개별 방법을 작업 전반의 신뢰 메커니즘으로 연결', outlookIntro:'기존 논문과 평가를 바탕으로 아래의 분야 간 문제를 향후 프로토타입과 실험을 통해 검증하고자 합니다.',
      outlook:[['단계 간 증거 연결','모델 출처, 검색 근거, 생성 위험, 도구 기록을 연결하여 추적하고 검토할 수 있는 작업 증거를 연구합니다.'],['위험 발견에서 행동 제약으로','위험 신호를 도구 사용과 권한 판단에 반영하여 작업에 맞는 개입을 연구합니다.'],['변화 속에서 지속 평가','모델 갱신, 환경 변화와 다단계 작업에서 안전, 완료 능력과 비용을 평가하고 실패 사례로 개선합니다.']]
    },
    th: {
      visionLabel:'วิสัยทัศน์ของเรา', visionTitle:'ความน่าเชื่อถือที่ตรวจสอบได้ และพฤติกรรมเอเจนต์ที่ควบคุมได้',
      vision:'เราศึกษาความปลอดภัยตั้งแต่ที่มาของโมเดล การสร้างเนื้อหา ไปจนถึงการใช้เครื่องมือ โดยมุ่งสร้างหลักฐานที่ตรวจสอบได้และกลไกควบคุมที่นำไปปฏิบัติได้สำหรับการกำกับดูแลตลอดวงจรชีวิตเอเจนต์',
      whyTitle:'ทำไมจึงศึกษาปัญหาเหล่านี้', why:'AI กำลังเปลี่ยนจากการสร้างคำตอบไปสู่การใช้เครื่องมือและลงมือทำงาน ที่มาของโมเดลที่ไม่ชัดเจน คำตอบที่คลาดจากหลักฐาน และคำสั่งอันตรายจากภายนอก อาจกระทบการตัดสินใจและสะสมความเสี่ยงในหลายขั้นตอน',
      mapLabel:'ความเชื่อมโยงของงานวิจัย', mapTitle:'จากหลักฐานที่ตรวจสอบได้ สู่คำตอบที่เชื่อถือได้และการกระทำที่ปลอดภัย', relation:'ทั้งสามด้านตอบคำถามร่วมกันว่า เมื่อเอเจนต์ใช้โมเดล ทำความเข้าใจข้อมูล และลงมือทำงาน เราจะประเมินความน่าเชื่อถือและแทรกแซงเมื่อเกิดความเสี่ยงอย่างไร',
      steps:[['ตรวจสอบที่มาและความแท้จริง','ศึกษาหลักฐานที่มาของโมเดลและการสังเคราะห์หรือดัดแปลงเนื้อหา','โมเดลและเนื้อหา'],['เข้าใจความเสี่ยงและปรับการสร้างคำตอบ','วิเคราะห์ความล้มเหลวด้านความปลอดภัยและการคลาดจากหลักฐานเพื่อแทรกแซงการสร้างคำตอบ','การให้เหตุผลและสร้างคำตอบ'],['ตรวจจับการโจมตีและจำกัดการกระทำ','ศึกษาผลของข้อมูลและเครื่องมือภายนอก ต่อยอดจากการตรวจจับสู่ข้อจำกัดพฤติกรรมและสิทธิ์','การโต้ตอบและปฏิบัติงาน']],
      feedback:'เป้าหมายคือเชื่อมหลักฐานที่มากับการใช้ข้อมูล เชื่อมสัญญาณความเสี่ยงกับการควบคุมการกระทำ และใช้ความล้มเหลวระหว่างโต้ตอบเพื่อปรับปรุงวิธีตรวจสอบและสร้างคำตอบ',
      workLabel:'สิ่งที่เราศึกษา', currentLabel:'ฐานงานวิจัยที่มีแล้ว', nextLabel:'คำถามวิจัยขั้นต่อไป',
      current:[['ลายนิ้วมือโมเดลและความสัมพันธ์ของโมเดลอนุพันธ์เพื่อยืนยันที่มา','การลบลายนิ้วมือและฟื้นฟูความสามารถเพื่อประเมินขอบเขตการป้องกัน','การแยกภาพและเรียนรู้ข้ามมุมมองเพื่อตรวจจับวิธีปลอมที่ไม่เคยพบ'],['วิเคราะห์พารามิเตอร์และตัวแทนภายในเพื่อศึกษาจุดอ่อนของการปรับแนวทางความปลอดภัย','เปรียบเทียบพฤติกรรมเมื่อมีและไม่มีบริบทค้นคืนเพื่อตรวจความขัดแย้งกับความจำโมเดล','ใช้สัญญาณหลายระดับปรับการถอดรหัสให้ยึดตามหลักฐาน'],['การแทรกคำสั่ง การโจมตีเครื่องมือ และการตรวจจับหลายชั้นใน MCP','การโจมตีผ่านลิงก์และเว็บอันตรายพร้อมการประเมิน','จำแนกความเสี่ยงระบบกายภาพและศึกษาการโจมตีคำสั่งกับการทำงานร่วมกัน']],
      next:['ศึกษาความคงทนของหลักฐานหลังปรับแต่ง บีบอัด หรือลบลายนิ้วมือ ภายใต้การเข้าถึงและวิธีปลอมที่ต่างกัน','เชื่อมการตรวจความเสี่ยงกับการแทรกแซงคำตอบ และประเมินความปลอดภัย ความตรงต่อหลักฐาน และต้นทุน','ศึกษาความสอดคล้องระหว่างเจตนากับพฤติกรรม สิทธิ์แบบพลวัต และการควบคุมขณะทำงาน'],
      outlookLabel:'วาระวิจัยในอนาคต', outlookTitle:'เชื่อมวิธีเฉพาะจุดเป็นกลไกความน่าเชื่อถือตลอดงาน', outlookIntro:'จากฐานบทความและการประเมินที่มีอยู่ เรามุ่งศึกษาประเด็นข้ามด้านต่อไปนี้ผ่านต้นแบบและการทดลองในอนาคต',
      outlook:[['เชื่อมหลักฐานข้ามขั้นตอน','ศึกษาการเชื่อมที่มาของโมเดล หลักฐานค้นคืน ความเสี่ยงคำตอบ และบันทึกเครื่องมือเพื่อให้งานตรวจสอบย้อนหลังได้'],['จากตรวจพบความเสี่ยงสู่จำกัดการกระทำ','ศึกษาการใช้สัญญาณความเสี่ยงในการเลือกเครื่องมือและตัดสินสิทธิ์ เพื่อแทรกแซงให้เหมาะกับงาน'],['ประเมินต่อเนื่องเมื่อระบบเปลี่ยน','ประเมินความปลอดภัย ความสำเร็จของงาน และต้นทุนเมื่อโมเดลหรือสภาพแวดล้อมเปลี่ยน พร้อมเรียนรู้จากความล้มเหลว']]
    }
  };
  Object.keys(agenda).forEach(function(lang) { copy[lang].agenda = agenda[lang]; });
  window.RESEARCH_COPY = copy;
  Object.keys(copy).forEach(function (lang) {
    var d = window.RESUME[lang], c = copy[lang];
    d.heroSubtitle = c.title; d.heroDesc = c.intro; d.heroCta = d.nav.research;
    // Preserve the original founder's message, history, values and recruitment copy.
    d.pubTitle = c.labels[5]; d.nav.papers = c.labels[5]; d.nav.contact = c.labels[6];
  });
  window.SELECTED_RESEARCH = [
    {name:'AttnDiff', group:0, venue:'NeurIPS 2026', status:'accepted', url:'https://arxiv.org/abs/2604.05502'},
    {name:'MEraser', group:0, venue:'ACL 2025 · Main', status:'published', url:'https://arxiv.org/abs/2506.12551'},
    {name:'IDCNet', group:0, venue:'IEEE TIFS 2025', status:'published', url:'https://doi.org/10.1109/TIFS.2025.3593353'},
    {name:'FIDES', group:1, venue:'EMNLP 2026 · Main', status:'published', url:'https://aclanthology.org/2026.emnlp-main.1772/'},
    {name:'MCP-Guard', group:2, venue:'ACL 2026 · Findings', status:'published', url:'https://aclanthology.org/2026.findings-acl.240/'},
    {name:'EverTracer', group:0, venue:'EMNLP 2025 · Main', status:'published', url:'https://arxiv.org/abs/2509.03058'}
  ];
  // Explicit topic assignment; unmatched records remain related research, not inferred governance achievements.
  window.paperResearchGroup = function (cite) {
    if (/AttnDiff|EverTracer|MEraser|IDCNet|SRAF|CTCC|LoRA-FP|PREE|ForgetMark|DNF:|Kinguard|Fingerprint|facial forgery/i.test(cite)) return '0';
    if (/FIDES|DISF:|TriLens|Safety Disalignment|Silencing the Guardrails|LatentAudit|Hallucination|Detecting Is Not Resolving|Composition Collapse|PII Extraction|Safety Illusion|EmbedGuard|Distill To Detect|Spectral Logit/i.test(cite)) return '1';
    if (/MCP-Guard|Web Fraud|MalURLBench|Optimizing and Attacking Embodied|Towards robust and secure embodied|One4all|GenTel-Safe/i.test(cite)) return '2';
    return 'related';
  };
})();
