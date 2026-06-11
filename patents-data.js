/* 专利数据：已授权 / 受理中（不含驳回）；展示不含发明人姓名 */
(function (global) {
  'use strict';

  global.TOPOLOGY_PATENTS = [
    /* 场景层 */
    { layer: 0, lane: 0, kind: '发明', status: '受理中', name: '一种面向不同年龄段儿童的大语言模型安全评估方法和设备', brief: '青少年场景安全评测' },
    { layer: 0, lane: 0, kind: '发明', status: '受理中', name: '一种多模态医疗AI系统决策行为一致性评估方法', brief: '医疗大模型决策可溯评估' },
    { layer: 0, lane: 1, kind: '发明', status: '受理中', name: '一种人工智能安全攻防靶场系统', brief: 'AI 安全攻防靶场实训' },

    /* 技术层 */
    { layer: 1, lane: 0, kind: '发明', status: '已授权', name: '基于模糊测试的大语言模型漏洞检测方法和装置', brief: '模糊测试驱动的大模型漏洞发现' },
    { layer: 1, lane: 0, kind: '发明', status: '受理中', name: '一种基于神经元再学习的大语言模型安全对齐风险评估方法和设备', brief: '安全对齐风险定位与再学习' },
    { layer: 1, lane: 1, kind: '发明', status: '已授权', name: '基于上下文学习的大语言模型提示词注入攻击检测方法和装置', brief: '提示注入攻击检测与防护' },
    { layer: 1, lane: 2, kind: '发明', status: '受理中', name: '一种基于双路径内部状态强迫的检索增强生成幻觉检测方法', brief: '对应 DISF 双路径 RAG 幻觉检测' },

    /* 协议层 */
    { layer: 2, lane: 0, kind: '发明', status: '受理中', name: '一种支持多用户匿名身份代理的智能体交互系统及方法', brief: '跨域智能体匿名身份代理' },
    { layer: 2, lane: 1, kind: '发明', status: '受理中', name: '一种面向大语言模型上下文协议的三层协同攻击检测与防御方法及装置', brief: 'MCP 协议纵深协同防御' },
    { layer: 2, lane: 1, kind: '发明', status: '受理中', name: '一种基于高斯聚类的大语言模型上下文协议工具精准采样方法及装置', brief: '对应 HGMF 工具调用采样' },
    { layer: 2, lane: 2, kind: '发明', status: '受理中', name: '基于区块链的RAG系统安全执行与攻击可审计方法', brief: 'RAG 链上执行与攻击审计' },

    { layer: 3, lane: 0, kind: '发明', status: '已授权', name: '基于区块链和模型指纹的模型权重确权方法和装置', brief: '区块链+指纹模型权重确权' },
    { layer: 3, lane: 1, kind: '发明', status: '受理中', name: '一种基于物理、生理特征与生成痕迹的多模态深度伪造检测方法', brief: '多模态深度伪造检测与溯源' },
    { layer: 3, lane: 1, kind: '发明', status: '受理中', name: '一种人脸图像的伪造检测和重建方法和装置', brief: '人脸伪造检测与重建溯源' },
    { layer: 3, lane: 2, kind: '发明', status: '已授权', name: '基于双层嵌套指纹的大语言模型知识产权保护方法和装置', brief: '对应 DNF 双层嵌套指纹' },
    { layer: 3, lane: 2, kind: '发明', status: '受理中', name: '一种基于知识前缀增强的大语言模型无害化自适应指纹编辑方法和设备', brief: '对应 PREE 无害指纹编辑' },
    { layer: 3, lane: 2, kind: '发明', status: '已授权', name: '一种基于灾难性知识遗忘的大模型指纹擦除方法和设备', brief: '对应 MEraser 指纹擦除' }
  ];

  global.PATENTS_FULL = {
    zh: {
      categories: [
        { title: '大模型安全评测与对齐防护', items: [
          '一种基于神经元再学习的大语言模型安全对齐风险评估方法和设备。[受理中]',
          '基于模糊测试的大语言模型漏洞检测方法和装置。[已授权]',
          '基于场景嵌套的大语言模型安全漏洞自动检测方法和装置。[受理中]',
          '一种基于攻击分支剪枝与推理链操纵的大模型安全评测方法和装置。[受理中]',
          '基于禁忌搜索算法的大语言模型安全测试方法和装置。[受理中]',
          '一种面向不同年龄段儿童的大语言模型安全评估方法和设备。[受理中]',
          '一种面向化学场景的小语言模型安全风险评估方法及装置。[受理中]',
          '一种基于对抗训练与知识库联动的自进化大语言模型防护方法。[受理中]',
          '基于动态调控的大语言模型安全保护防御方法和装置。[受理中]',
          '基于强化学习的大语言模型安全保护防御方法和装置。[受理中]',
          '基于随机搜索算法的大语言模型安全保护防御方法。[受理中]',
          '一种基于双端循环自检的大语言模型安全保护防御方法和装置。[受理中]',
          '一种可插拔的多模态大模型安全防护方法。[受理中]',
          '基于加权投票的大语言模型全流程内容风险检测方法和装置。[受理中]',
          '一种基于多 Agent 协同的智能补贴计算与安全增强方法和设备。[受理中]'
        ]},
        { title: '幻觉检测与 RAG 可信', items: [
          '一种基于多维异构特征融合的大语言模型幻觉检测方法、系统及设备。[受理中]',
          '一种基于自适应顺序统计量聚合的大语言模型幻觉检测后处理方法、系统、设备及介质。[受理中]',
          '一种基于双路径内部状态强迫的检索增强生成幻觉检测方法。[受理中]',
          '一种基于多视角质询与图推理的大语言模型幻觉检测方法及装置。[受理中]',
          '一种基于多智能体协作与动态状态追踪的大模型幻觉缓解方法。[受理中]',
          '一种基于动态语义校准的多模态大模型幻觉缓解方法。[受理中]',
          '基于嵌入向量的RAG生成质量评估方法和系统。[受理中]',
          '基于区块链的RAG系统安全执行与攻击可审计方法。[受理中]'
        ]},
        { title: '越狱攻击与提示注入防御', items: [
          '基于上下文学习的大语言模型提示词注入攻击检测方法和装置。[已授权]',
          '一种基于利用特征空间散度进行对抗样本检测的方案。[受理中]',
          '基于关系型知识蒸馏的深度学习模型后门攻击防御方法。[受理中]',
          '基于文本嵌入优化的文生图模型敏感内容过滤和防御方法。[受理中]'
        ]},
        { title: '大模型版权保护与指纹技术', items: [
          '一种基于知识前缀增强的大语言模型无害化自适应指纹编辑方法和设备。[受理中]',
          '基于混合专家的可路由分布式指纹嵌入与迁移方法及装置。[已授权]',
          '基于亲属关系与文本特征匹配的模型版权保护方法和装置。[已授权]',
          '基于多轮对话跨轮次语义关联的后门指纹嵌入方法和装置。[已授权]',
          '一种基于指纹成员概率偏移信号的大语言模型版权保护方法和设备。[已授权]',
          '基于隐藏状态插值的大语言模型可用性增强方法和装置。[已授权]',
          '基于双层嵌套指纹的大语言模型知识产权保护方法和装置。[已授权]',
          '一种基于灾难性知识遗忘的大模型指纹擦除方法和设备。[已授权]',
          '基于旁支网络的模型指纹注入与验证方法及设备。[已授权]',
          '基于幻觉上下文嵌入的大语言模型所有权认证方法和装置。[已授权]',
          '一种基于权重叠加的大语言模型指纹添加方法和设备。[已授权]',
          '一种基于多扰动空间联合优化的大视觉语言模型指纹生成方法和设备。[受理中]',
          '一种基于动态指纹生成器的视觉语言模型版权保护方法和装置。[受理中]',
          '一种基于多模型联合梯度优化的对抗性提示版权验证方法及设备。[受理中]',
          '基于目标遗忘的隐蔽指纹嵌入及模型保护方法和装置。[受理中]',
          '基于领域特异性偏见特征指纹的大语言模型知识产权保护方法及装置。[受理中]',
          '基于区块链和模型指纹的模型权重确权方法和装置。[已授权]',
          '基于区块链的性能无损水印可信溯源方法和系统。[已授权]',
          '基于扩散模型的语音水印注入及确权方法和系统。[受理中]',
          '一种基于零阶优化的扩散模型艺术版权保护方法和装置。[受理中]'
        ]},
        { title: '模型上下文协议与智能体安全', items: [
          '一种面向大语言模型上下文协议的三层协同攻击检测与防御方法及装置。[受理中]',
          '一种基于高斯聚类的大语言模型上下文协议工具精准采样方法及装置。[受理中]',
          '一种基于多阶段自适应和难负样本对比学习的大语言模型工具调用方法。[受理中]',
          '一种基于策略网络与梯度引导的大语言模型行为干预方法和设备。[受理中]',
          '一种基于强化学习的大语言模型多轮对话优化和评估方法及设备。[受理中]',
          '一种支持多用户匿名身份代理的智能体交互系统及方法。[受理中]',
          '基于区块链的大语言模型智能体异常行为溯源方法。[受理中]',
          '一种基于身份绑定可信执行环境中继的跨链执行控制方法及系统。[受理中]',
          '一种基于多阶段自适应混合智能优化的分布式异构系统资源管理与智能路由方法和装置。[受理中]'
        ]},
        { title: '区块链与可信计算基础设施', items: [
          '基于分层粒子群优化的区块链系统资源监测与动态调度方法。[受理中]',
          '基于分布式存储加密与大模型语义验证的链下数据持有证明方法和系统。[受理中]',
          '基于区块链与差分隐私的交易过程数据发布方法和系统。[受理中]',
          '基于质量证明的生成式模型区块链推理部署方法和系统。[已授权]',
          '支持多模态异构客户端的联邦大模型知识协同训练方法。[已授权]'
        ]},
        { title: '多模态伪造检测与内容安全', items: [
          '一种基于物理、生理特征与生成痕迹的多模态深度伪造检测方法。[受理中]',
          '一种人脸图像的伪造检测和重建方法和装置。[受理中]',
          '一种基于图像信息增强的人脸识别认证方法。[受理中]',
          '基于不同色彩空间的模型安全检测方法和装置。[已授权]',
          '一种用于图像保护的主动防御方法及装置。[已授权]',
          '基于半监督集成学习的欺诈检测方法及系统。[已授权]',
          '多模态融合的假新闻检测方法和装置。[受理中]',
          '基于音素匹配发音表的音频训练数据集筛选方法。[受理中]'
        ]},
        { title: '医疗·教育·文旅等场景应用', items: [
          '一种多模态医疗AI系统决策行为一致性评估方法。[受理中]',
          '一种基于动态代价图匹配与推理路径逻辑审查的医疗语言模型评估方法及装置。[受理中]',
          '一种人工智能安全实训靶场中AI靶标实例的处理方法及装置。[受理中]',
          '一种人工智能安全攻防靶场系统。[受理中]',
          '一种基于神经符号与多智能体协同的数字文化遗产活化与动态推演系统及方法。[受理中]',
          '一种基于Shapley交互指数的视觉大语言模型鲁棒性评估方法及设备。[受理中]',
          '一种基于双层引导稀疏策略的大视觉语言模型鲁棒性评估方法及设备。[受理中]',
          '基于多智能体对抗博弈的大型视觉语言模型鲁棒性评估方法与装置。[受理中]',
          '一种基于强化学习的多模态幽默理解增强与评估方法和设备。[受理中]'
        ]},
        { title: '产品图形界面（外观设计）', items: [
          '用于电子设备的生成式人工智能风险防护系统图形用户界面（系列6件）。[已授权]',
          '用于电子设备的生成式人工智能评测验证系统图形用户界面（系列6件）。[已授权]',
          '用于电子设备的人工智能教学演练系统图形用户界面（系列6件）。[受理中]'
        ]},
        { title: '基础算法与早期授权专利', items: [
          '基于神经基和张量分解的神经辐射场渲染方法和装置。[已授权]',
          '基于特征匹配的无人机搜救图像融合方法和装置。[已授权]',
          '一种基于椭圆曲线的半易碎扩散水印方法和系统。[已授权]',
          '基于生成对抗网络数据解耦的数据平衡去毒方法。[已授权]',
          '基于GAN网络和元学习的系统日志检测方法及系统。[已授权]',
          '黑灰产众包流量预测装置及方法。[已授权]',
          '基于半监督预训练模型的细粒度情感分析方法和装置。[已授权]',
          '一种基于深度强化学习的蜜罐部署主动防御方法。[已授权]',
          '基于神经元激活值聚类的纵向联邦学习后门防御方法。[已授权]',
          '一种面向第三方组件及其安全风险的跨架构自动化检测方法与系统。[已授权]',
          '一种基于神经元激活的信号调制类型识别模型可解释方法及装置。[已授权]',
          '基于模型同化的可疑模型后门类别定位方法。[已授权]',
          '基于STNR模型的交通流量预测方法及系统。[已授权]',
          '一种基于并行多图卷积神经网络的无监督专利聚类方法。[已授权]',
          '基于神经网络集合操作的用户偏好推荐方法和装置。[已授权]',
          '一种基于自注意力机制的图网络的系统日志检测方法。[已授权]',
          '一种基于注意力机制的对抗文本防御方法及系统。[已授权]',
          '基于扩散模型的新视角图片生成方法。[受理中]',
          '一种基于三维高斯泼溅与水下成像模型的水下三维场景重建方法和装置。[受理中]',
          '基于聚类和自然语言策略优化算法的代码生成模型微调方法和装置。[受理中]',
          '一种基于蜕变测试的文生图扩散模型微调方法和系统。[受理中]',
          'METHOD AND APPARATUS FOR RECOMMENDING USER PREFERENCES BASED ON NEURAL SET OPERATIONS（巴黎公约）。[受理中]',
          'CROSS-ARCHITECTURE AUTOMATIC DETECTION METHOD AND SYSTEM FOR THIRD-PARTY COMPONENTS AND SECURITY RISKS THEREOF（巴黎公约）。[受理中]'
        ]}
      ]
    },
    en: {
      categories: [
        { title: 'LLM Safety Evaluation & Protection', items: [
          'Safety alignment risk assessment for LLMs via neuron relearning. [Pending]',
          'LLM vulnerability detection via fuzz testing. [Granted]',
          'Automatic LLM security vulnerability detection via scenario nesting. [Pending]',
          'LLM security evaluation via attack-branch pruning and reasoning-chain manipulation. [Pending]',
          'LLM security testing via tabu search. [Pending]',
          'LLM safety evaluation for children of different age groups. [Pending]',
          'Safety risk assessment for small language models in chemistry scenarios. [Pending]',
          'Self-evolving LLM protection via adversarial training and knowledge-base linkage. [Pending]',
          'LLM safety defense via dynamic regulation. [Pending]',
          'LLM safety defense via reinforcement learning. [Pending]',
          'LLM safety defense via random search. [Pending]',
          'LLM safety defense via dual-end cyclic self-inspection. [Pending]',
          'Pluggable multimodal LLM security protection. [Pending]',
          'Full-pipeline content risk detection for LLMs via weighted voting. [Pending]',
          'Intelligent subsidy calculation and security enhancement via multi-agent collaboration. [Pending]'
        ]},
        { title: 'Hallucination Detection & RAG Trustworthiness', items: [
          'LLM hallucination detection via multi-dimensional heterogeneous feature fusion. [Pending]',
          'Post-processing for LLM hallucination detection via adaptive order-statistic aggregation. [Pending]',
          'RAG hallucination detection via dual-path internal state forcing. [Pending]',
          'LLM hallucination detection via multi-perspective inquiry and graph reasoning. [Pending]',
          'LLM hallucination mitigation via multi-agent collaboration and dynamic state tracking. [Pending]',
          'Multimodal LLM hallucination mitigation via dynamic semantic calibration. [Pending]',
          'RAG generation quality assessment via embedding vectors. [Pending]',
          'Secure and auditable RAG execution on blockchain. [Pending]'
        ]},
        { title: 'Jailbreak & Prompt Injection Defense', items: [
          'Prompt injection attack detection for LLMs via in-context learning. [Granted]',
          'Adversarial sample detection via feature-space divergence. [Pending]',
          'Backdoor attack defense via relational knowledge distillation. [Pending]',
          'Sensitive content filtering for text-to-image models via text embedding optimization. [Pending]'
        ]},
        { title: 'LLM Copyright & Fingerprinting', items: [
          'Harmless adaptive fingerprint editing for LLMs via knowledge-prefix enhancement. [Pending]',
          'Routable distributed fingerprint embedding and transfer via mixture of experts. [Granted]',
          'Model copyright protection via kinship and text feature matching. [Granted]',
          'Backdoor fingerprint embedding via cross-turn semantic correlation in multi-turn dialogue. [Granted]',
          'LLM copyright protection via fingerprint member probability shift. [Granted]',
          'LLM usability enhancement via hidden-state interpolation. [Granted]',
          'LLM IP protection via dual-layer nested fingerprinting. [Granted]',
          'LLM fingerprint erasure via catastrophic knowledge forgetting. [Granted]',
          'Model fingerprint injection and verification via side-branch network. [Granted]',
          'LLM ownership authentication via hallucination context embedding. [Granted]',
          'LLM fingerprint addition via weight superposition. [Granted]',
          'Large vision-language model fingerprint generation via multi-perturbation joint optimization. [Pending]',
          'Vision-language model copyright protection via dynamic fingerprint generator. [Pending]',
          'Copyright verification via multi-model joint gradient adversarial prompts. [Pending]',
          'Stealthy fingerprint embedding and model protection via targeted forgetting. [Pending]',
          'LLM IP protection via domain-specific bias feature fingerprints. [Pending]',
          'Model weight rights confirmation via blockchain and model fingerprint. [Granted]',
          'Lossless watermark provenance on blockchain. [Granted]',
          'Speech watermark injection and rights confirmation via diffusion models. [Pending]',
          'Diffusion-model art copyright protection via zeroth-order optimization. [Pending]'
        ]},
        { title: 'Context Protocol & Agent Security', items: [
          'Three-layer collaborative attack detection and defense for LLM context protocol. [Pending]',
          'Precise tool sampling for LLM context protocol via Gaussian clustering. [Pending]',
          'LLM tool invocation via multi-stage adaptive and hard-negative contrastive learning. [Pending]',
          'LLM behavior intervention via policy network and gradient guidance. [Pending]',
          'LLM multi-turn dialogue optimization and evaluation via reinforcement learning. [Pending]',
          'Multi-user anonymous identity proxy for agent interaction. [Pending]',
          'Abnormal behavior tracing for LLM agents on blockchain. [Pending]',
          'Cross-chain execution control via identity-bound TEE relay. [Pending]',
          'Distributed heterogeneous resource management and intelligent routing. [Pending]'
        ]},
        { title: 'Blockchain & Trusted Infrastructure', items: [
          'Blockchain resource monitoring and scheduling via hierarchical particle swarm optimization. [Pending]',
          'Off-chain data possession proof via distributed encrypted storage and LLM semantic verification. [Pending]',
          'Transaction data publication via blockchain and differential privacy. [Pending]',
          'Generative model inference deployment on blockchain with quality proof. [Granted]',
          'Federated LLM knowledge collaborative training for multimodal heterogeneous clients. [Granted]'
        ]},
        { title: 'Multimodal Forgery Detection & Content Safety', items: [
          'Multimodal deepfake detection via physical, physiological and generative traces. [Pending]',
          'Face image forgery detection and reconstruction. [Pending]',
          'Face recognition authentication via image information enhancement. [Pending]',
          'Model security detection across color spaces. [Granted]',
          'Active defense for image protection. [Granted]',
          'Fraud detection via semi-supervised ensemble learning. [Granted]',
          'Fake news detection via multimodal fusion. [Pending]',
          'Audio training dataset filtering via phoneme-matched pronunciation tables. [Pending]'
        ]},
        { title: 'Medical, Education & Domain Applications', items: [
          'Multimodal medical AI decision behavior consistency evaluation. [Pending]',
          'Medical LLM evaluation via dynamic cost graph matching and reasoning-path logic review. [Pending]',
          'AI target instance processing in AI security training ranges. [Pending]',
          'AI security attack-defense cyber range system. [Pending]',
          'Digital cultural heritage activation via neuro-symbolic multi-agent collaboration. [Pending]',
          'Vision-language model robustness evaluation via Shapley interaction index. [Pending]',
          'Vision-language model robustness evaluation via dual-layer guided sparse strategy. [Pending]',
          'Vision-language model robustness evaluation via multi-agent adversarial games. [Pending]',
          'Multimodal humor understanding enhancement and evaluation via reinforcement learning. [Pending]'
        ]},
        { title: 'Product GUI (Design Patents)', items: [
          'Graphical user interface for generative AI risk protection system on electronic devices (series of 6). [Granted]',
          'Graphical user interface for generative AI evaluation and verification system on electronic devices (series of 6). [Granted]',
          'Graphical user interface for AI teaching and training system on electronic devices (series of 6). [Pending]'
        ]},
        { title: 'Foundational & Early Granted Patents', items: [
          'Neural radiance field rendering via neural basis and tensor decomposition. [Granted]',
          'UAV search-and-rescue image fusion via feature matching. [Granted]',
          'Semi-fragile spread spectrum watermarking via elliptic curves. [Granted]',
          'Data balancing detoxification via GAN data decoupling. [Granted]',
          'System log detection via GAN and meta-learning. [Granted]',
          'Black-and-gray industry crowdsourcing traffic prediction. [Granted]',
          'Fine-grained sentiment analysis via semi-supervised pre-training. [Granted]',
          'Honeypot deployment active defense via deep reinforcement learning. [Granted]',
          'Vertical federated learning backdoor defense via neuron activation clustering. [Granted]',
          'Cross-architecture automatic detection for third-party components and security risks. [Granted]',
          'Interpretable signal modulation recognition via neuron activation. [Granted]',
          'Backdoor class localization in suspicious models via model assimilation. [Granted]',
          'Traffic flow prediction via STNR model. [Granted]',
          'Unsupervised patent clustering via parallel multi-graph convolution. [Granted]',
          'User preference recommendation via neural set operations. [Granted]',
          'System log detection via self-attention graph networks. [Granted]',
          'Adversarial text defense via attention mechanism. [Granted]',
          'Novel view image generation via diffusion models. [Pending]',
          'Underwater 3D scene reconstruction via 3D Gaussian splatting and underwater imaging. [Pending]',
          'Code generation model fine-tuning via clustering and NL strategy optimization. [Pending]',
          'Text-to-image diffusion model fine-tuning via metamorphic testing. [Pending]',
          'User preference recommendation based on neural set operations (PCT). [Pending]',
          'Cross-architecture detection for third-party component security risks (PCT). [Pending]'
        ]}
      ]
    }
  };

  global.PATENTS_FULL.zhtw = global.PATENTS_FULL.zh;
  global.PATENTS_FULL.ja = global.PATENTS_FULL.en;
  global.PATENTS_FULL.ko = global.PATENTS_FULL.en;
  global.PATENTS_FULL.th = global.PATENTS_FULL.en;
})(typeof window !== 'undefined' ? window : global);
