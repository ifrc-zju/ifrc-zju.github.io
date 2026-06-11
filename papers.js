/* 论文与专利数据 - 中英共用（引用以英文为主） */
window.PAPERS = {
  /* 期刊 if：JCR 2024（2025 年发布）；信息安全学报为中文综合影响因子 */
  journal: [
    { cite: 'Z. Xu, M. Han, X. Yue, W. Xing. <a href="https://www.sciengine.com/SSI/articleIndex?doi=10.1360/SSI-2025-0022" target="_blank" rel="noopener">InSty: A Robust Multi-Level Cross-Granularity Fingerprint Embedding Algorithm for Multi-Turn Dialogue in Large Language Models</a>. SCIENTIA SINICA Informationis. CCF-A.', if: 7.6 },
    { cite: 'W. Xing, M. Li, M. Li, M. Han. <a href="https://dl.acm.org/doi/10.1145/3806048" target="_blank" rel="noopener">Towards robust and secure embodied AI: A survey on vulnerabilities and attacks</a>. ACM Computing Surveys, 2025.', if: 23.8 },
    { cite: 'M. Liu, Y. Liu, Q. Ren, M. Han. <a href="https://www.sciencedirect.com/science/article/abs/pii/S1566253525002003" target="_blank" rel="noopener">Rethinking multi-level information fusion in temporal graphs: Pre-training then distilling for better embedding</a>. Information Fusion, 2025.', if: 14.8 },
    { cite: 'Y. Zhang, Q. Ren, Y. Chen, M. Han. <a href="https://link.springer.com/article/10.1007/s40747-025-02039-9" target="_blank" rel="noopener">Beyond contrastive learning: adaptive graph representations with mutual information maximization for blockchain and structured data</a>. Complex & Intelligent Systems, 2025.', if: 4.6 },
    { cite: 'Z. Wang, Y. Chen, Y. Yao, M. Han, W. Xing, M. Li. <a href="https://ieeexplore.ieee.org/abstract/document/11098842" target="_blank" rel="noopener">IDCNet: Image Decomposition and Cross-view Distillation for Generalizable Deepfake Detection</a>. IEEE TIFS. CCF-A.', if: 8.0 },
    { cite: 'J. Yu, W. Fan, Y. Guo, H. Lyu, H. Gao, C. Lin, M. Han, X. Cheng. <a href="https://ieeexplore.ieee.org/abstract/document/11118317/" target="_blank" rel="noopener">GenBEV: Generative Model With Semantic Compensation for Bird\'s Eye View Segmentation</a>. IEEE Transactions on Intelligent Transportation Systems, 2024.', if: 8.4 },
    { cite: 'T. Qiao, B. Zhao, R. Shi, M. Han, M. Hassaballah, F. Retraint, X. Luo. <a href="https://ieeexplore.ieee.org/abstract/document/10680120" target="_blank" rel="noopener">Scalable universal adversarial watermark defending against facial forgery</a>. IEEE Transactions on Information Forensics and Security, 2024.', if: 8.0 },
    { cite: 'Y. Zhuang, Y. Chen, X. Zhang, T. Ren, M. Han, M. Alam, Z. Hong. <a href="https://ieeexplore.ieee.org/abstract/document/10636342" target="_blank" rel="noopener">A Large-Scale Node Lightweight Consensus Algorithm of Blockchain for Internet of Things</a>. IEEE Internet of Things Journal, 2024.', if: 8.9 },
    { cite: 'Z. Hong, M. Chen, R. Wang, M. Yan, D. Zheng, C. Lin, J. Su, M. Han. <a href="https://ieeexplore.ieee.org/abstract/document/10526449" target="_blank" rel="noopener">Active Learning-Based Backtracking Attack Against Source Location Privacy of Cyber-Physical System</a>. IEEE Transactions on Emerging Topics in Computational Intelligence, 2024.', if: 6.5 },
    { cite: 'Z. Liu, C. Hu, C. Ruan, P. Hu, M. Han, J. Yu. <a href="https://ieeexplore.ieee.org/abstract/document/10478494" target="_blank" rel="noopener">An enhanced authentication and key agreement protocol for smart grid communication</a>. IEEE Internet of Things Journal, 2024.', if: 8.9 },
    { cite: 'Y. Chen, Y. Zhang, Y. Zhuang, K. Miao, S. Pouriyeh, M. Han. <a href="https://ieeexplore.ieee.org/abstract/document/10381487" target="_blank" rel="noopener">Efficient and secure blockchain consensus algorithm for heterogeneous industrial Internet of Things nodes based on double-DAG</a>. IEEE Transactions on Industrial Informatics, 2024.', if: 9.9 },
    { cite: 'Y. Wang, S. Wang, H. Luo, J. Dong, F. Wang, M. Han, X. Wang, M. Wang. <a href="https://ieeexplore.ieee.org/abstract/document/10440048" target="_blank" rel="noopener">Dual-view Curricular Optimal Transport for Cross-lingual Cross-modal Retrieval</a>. IEEE Transactions on Image Processing, 2024.', if: 13.7 },
    { cite: 'Y. Chen, H. Chen, Z. Xiong, B. Liu, Z. Wang, M. Han. <a href="https://www.sciencedirect.com/science/article/pii/S2352864822002553" target="_blank" rel="noopener">Game theory attack pricing for mining pools in blockchain-based IoT</a>. Digital Communications and Networks, 2024.', if: 7.5 },
    { cite: 'L. Liu, Z. Ma, Y. Zhou, M. Fan, M. Han. <a href="https://www.sciencedirect.com/science/article/pii/S2666721823001425" target="_blank" rel="noopener">Trust in ESG reporting: The intelligent veri-green solution for incentivized verification</a>. Blockchain: Research and Applications, 2024.', if: 5.6 },
    { cite: 'B. Zhao, S. Ji, J. Xu, Y. Tian, Q. Wei, Q. Wang. <a href="https://arxiv.org/pdf/2212.13716" target="_blank" rel="noopener">One Bad Apple Spoils the Barrel: Understanding the Security Risks Introduced by Third-Party Components in IoT Firmware</a>. IEEE Transactions on Dependable and Secure Computing, 2023.', if: 7.5 },
    { cite: 'L. Lu, Z. Wen, Y. Yuan, B. Dai, P. Qian, C. Lin, Q. He, Z. Liu, J. Chen, R. Ranjan. <a href="https://ieeexplore.ieee.org/abstract/document/9983476/" target="_blank" rel="noopener">A Trustworthy and Scalable Blockchain Analytics Platform</a>. IEEE Transactions on Dependable and Secure Computing, 2023.', if: 7.5 },
    { cite: 'Z. Wang, J. Huang, K. Miao, X. Lv, Y. Chen, B. Su, L. Liu, M. Han. <a href="https://www.sciencedirect.com/science/article/abs/pii/S1389128623004668" target="_blank" rel="noopener">Lightweight zero-knowledge authentication scheme for IoT embedded devices</a>. Computer Networks, 2023.', if: 4.6 },
    { cite: 'J. Ma, Y. Liu, M. Han, C. Hu, Z. Ju. <a href="https://ieeexplore.ieee.org/abstract/document/10275075" target="_blank" rel="noopener">Propagation structure fusion for rumor detection based on node-level contrastive learning</a>. IEEE Transactions on Neural Networks and Learning Systems, 2023.', if: 8.9 },
    { cite: 'C. Hu, Z. Liu, R. Li, P. Hu, T. Xiang, M. Han. <a href="https://ieeexplore.ieee.org/abstract/document/10198760" target="_blank" rel="noopener">Smart contract assisted privacy-preserving data aggregation and management scheme for smart grid</a>. IEEE Transactions on Dependable and Secure Computing, 2023.', if: 7.5 },
    { cite: 'M. Han, Y. Weiping, Z. Yiyun, D. Wentao, S. Yanbin, L. Changting. <a href="https://jcs.iie.ac.cn/xxaqxb/ch/reader/view_abstract.aspx?file_no=20230302&flag=1" target="_blank" rel="noopener">Adversarial sample detection based on feature distribution differences</a>. Journal of Information Security, 2023.', if: 1.89, ifNote: 'composite' },
    { cite: 'W. Xing, J. Chen, Y. Guo, <a href="https://link.springer.com/article/10.1007/s11633-022-1381-9" target="_blank" rel="noopener">Robust Local Light Field Synthesis via Occlusion-aware Sampling and Deep Visual Feature Fusion</a>, Machine Intelligence Research (MIR) 20, 408–420 (2023).', if: 8.7 }
  ],
  conference: [
    { cite: 'W. Xing, M. Fang, G. Wang, C. Lin, M. Han. Silencing the Guardrails: Inference-Time Jailbreaking via Dynamic Contextual Representation Ablation. ACL, 2026. CCF-A.' },
    { cite: 'W. Xing, Z. Qi, Y. Qin, Y. Li, C. Chang, J. Yu, C. Lin, Z. Xie, M. Han. <a href="https://arxiv.org/abs/2508.10991" target="_blank" rel="noopener">MCP-Guard: A Multi-Stage Defense-in-Depth Framework for Securing Model Context Protocol in Agentic AI</a>. ACL, 2026. CCF-A.' },
    { cite: 'H. Zhang, Z. Xu, J. Li, S. Sheng, D. Kong, M. Han. <a href="https://arxiv.org/abs/2604.05502" target="_blank" rel="noopener">AttnDiff: Attention-based Differential Fingerprinting for Large Language Models</a>. ACL, 2026. CCF-A.' },
    { cite: 'D. Kong, H. Peng, Y. Zhang, L. Zhao, Z. Xu, S. Lin, C. Lin, M. Han. <a href="https://arxiv.org/abs/2509.01211" target="_blank" rel="noopener">Web Fraud Attacks Against LLM-Driven Multi-Agent Systems</a>. ACL, 2026. CCF-A.' },
    { cite: 'D. Kong, Z. Wu, S. Liu, Z. Tan, K. Lu, M. Li, Q. Liu, S. Chu, Z. Xu, X. Liu, M. Han. <a href="https://arxiv.org/abs/2601.18113" target="_blank" rel="noopener">MalURLBench: A Benchmark Evaluating Agents\' Vulnerabilities When Processing Web URLs</a>. ACL, 2026. CCF-A.' },
    { cite: 'Z. Xu, D. Chen, S. Wang, J. Li, C. Wang, M. Han, Y. Wang. <a href="https://arxiv.org/abs/2601.11007" target="_blank" rel="noopener">AdaMARP: An Adaptive Multi-Agent Interaction Framework for General Immersive Role-Playing</a>. ACL, 2026. CCF-A.' },
    { cite: 'Z. Yu, W. Xing, W. Luo, W. Xu, L. Huang, Y. Chen, C. Lin, M. Han. DISF: Detecting Hallucinations in Retrieval-Augmented Generation via Dual-path Internal State Forcing Framework. ACL, 2026. CCF-A.' },
    { cite: 'Y. Zhou, W. Xing, C. Lin, D. Kong, C. Hu, M. Han. Parameter Localization and Relearning for Safety Disalignment in Large Language Models. ICASSP 2026. CCF-B.' },
    { cite: 'Z. Xu, X. Tian, W. Zeng, W. Xing, T. Lu, G. Li, C. Chen, M. Han. <a href="https://arxiv.org/abs/2601.12986" target="_blank" rel="noopener">Kinguard: Hierarchical Kinship-Aware Fingerprinting to Defend Against Large Language Model Stealing</a>. ICASSP 2026. CCF-B.' },
    { cite: 'Z. Xu, H. Zhang, Z. Wang, Q. Liu, H. Xu, W. Xing, M. Han. <a href="https://arxiv.org/abs/2601.08189" target="_blank" rel="noopener">ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models</a>. ICASSP 2026. CCF-B.' },
    { cite: 'Z. Xu, Y. Zhao, M. Zhong, D. Kong, C. Lin, T. Qiao, M. Han. <a href="https://arxiv.org/abs/2601.08223" target="_blank" rel="noopener">DNF: Dual-Layer Nested Fingerprinting for Large Language Model Intellectual Property Protection</a>. ICASSP 2026. CCF-B.' },
    { cite: 'Z. Wang, X. Mu, Z. Zhou, M. Li, W. Xing, D. Kong, M. Han. <a href="https://arxiv.org/abs/2601.15330" target="_blank" rel="noopener">ICPO: Illocution-Calibrated Policy Optimization for Multi-Turn Conversation</a>. ICASSP 2026. CCF-B.' },
    { cite: 'J. Li, Z. Wang, T. Lu, M. Li, W. Xing, M. Han. <a href="https://arxiv.org/abs/2509.25204" target="_blank" rel="noopener">Spectral Logit Sculpting: Adaptive Low-Rank Logit Transformation for Controlled Text Generation</a>. ICASSP 2026. CCF-B.' },
    { cite: 'W. Xing, L. Wei, H. Hu, R. Li, M. Li, C. Lin, M. Han. <a href="https://openreview.net/forum?id=xSw9HhyRw9" target="_blank" rel="noopener">SproutBench: A Benchmark for Safe and Ethical Large Language Models for Youth</a>. AAAI 2026 workshop LM4UC, 2025.' },
    { cite: 'S. Cheng, S. Meng, H. Xu, H. Zhang, S. Hao, C. Yue, W. Ma, M. Han, F. Zhang, Z. Li. <a href="https://www.usenix.org/conference/usenixsecurity25/presentation/cheng-shuai" target="_blank" rel="noopener">Effective PII Extraction from LLMs through Augmented Few-Shot Learning</a>. USENIX Security, 2025. CCF-A.' },
    { cite: 'H. Xu, Y. Sun, K. U. Qasim, S. Hao, W. Ma, Z. Li, F. Zhang, M. Han, Z. Li. <a href="https://ieeexplore.ieee.org/abstract/document/11044696" target="_blank" rel="noopener">Understanding the Business of Online Affiliate Marketing: An Empirical Study</a>. INFOCOM, 2025. CCF-A.' },
    { cite: 'W. Xing, J. Chen, Z. Yang, X. Tong, C. Lin, M. Han. <a href="https://ieeexplore.ieee.org/abstract/document/10889871" target="_blank" rel="noopener">NCDI-Diffusion: Neural Contextual and Directional Inversion to Diffusion Models for Novel View Synthesis</a>, ICASSP, India, 2025. CCF-B.' },
    { cite: 'C. Hu, X. Teng, W. Xing, H. Chen, C. Ye, M. Han. <a href="https://ieeexplore.ieee.org/abstract/document/10888729" target="_blank" rel="noopener">Distill To Detect: Amplifying Anomalies in Backdoor Models through Knowledge Distillation</a>, ICASSP, 2025. CCF-B.' },
    { cite: 'X. Tong, B. Jin, J. Wang, W. Xing, T. Xia, M. Han. <a href="https://ieeexplore.ieee.org/abstract/document/10890123" target="_blank" rel="noopener">IDE: A Multi-Agent-Driven Iterative Framework for Dynamic Evaluation of LLMs</a>, ICASSP, 2025. CCF-B.' },
    { cite: 'Z. Xu, X. Zhao, X. Yue, S. Tian, C. Lin, M. Han. <a href="https://github.com/Xuzhenhua55/CTCC" target="_blank" rel="noopener">CTCC: A Robust and Stealthy Fingerprinting Framework for Large Language Models via Cross-Turn Contextual Correlation Backdoor</a>. EMNLP, 2025. CCF-B.' },
    { cite: 'Z. Xu, M. Han, W. Xing. <a href="https://arxiv.org/abs/2509.03058" target="_blank" rel="noopener">EverTracer: Hunting Stolen Large Language Models via Stealthy and Robust Probabilistic Fingerprint</a>. EMNLP, 2025. CCF-B.' },
    { cite: 'Z. Xu, Z. Yan, B. Xu, X. Tong, H. Xu, Y. Chen, M. Han. <a href="https://arxiv.org/abs/2509.00820" target="_blank" rel="noopener">Unlocking the Effectiveness of LoRA-FP for Seamless Transfer Implantation of Fingerprints in Downstream Models</a>. EMNLP Findings, 2025. CCF-B.' },
    { cite: 'X. Yue, Z. Xu (co-first), W. Xing, J. Yu, M. Li, M. Han. <a href="https://arxiv.org/abs/2509.00918" target="_blank" rel="noopener">PREE: Towards Harmless and Adaptive Fingerprint Editing in Large Language Models via Knowledge Prefix Enhancement</a>. EMNLP Findings, 2025. CCF-B.' },
    { cite: 'J. Zhang, Z. Xu, R. Hu, W. Xing, X. Zhang, M. Han. <a href="https://arxiv.org/abs/2506.12551" target="_blank" rel="noopener">MEraser: An Effective Fingerprint Erasure Approach for Large Language Models</a>. ACL 2025. CCF-A.' },
    { cite: 'Y. Wang, J. Su, C. Chen, M. Han, C. Zhang, J. Wang. <a href="https://ojs.aaai.org/index.php/AAAI/article/view/33392" target="_blank" rel="noopener">Sim4Rec: Data-Free Model Extraction Attack on Sequential Recommendation</a>. AAAI, 2024. CCF-A.' },
    { cite: 'W. Xing, J. Chen, S. See, C. Cheung, <a href="https://dl.acm.org/doi/abs/10.1145/3581783.3612010" target="_blank" rel="noopener">IRCasTRF: Inverse Rendering by Optimizing Cascaded Tensorial Radiance Fields, Lighting, and Materials from Multi-view Images</a>, ACM MM, 2023. CCF-A.' },
    { cite: 'W. Xing, J. Chen, <a href="https://www.computer.org/csdl/proceedings-article/icme/2023/689100c183/1PTMC4TlFzq" target="_blank" rel="noopener">CasTensoRF: Cascaded Tensorial Radiance Fields for Novel View Synthesis</a>, ICME, pp. 2183–2188, Brisbane, 2023. CCF-B.' },
    { cite: 'J. Ma, J. Dai, Y. Liu, M. Han, C. Ai. <a href="https://dl.acm.org/doi/abs/10.1145/3583780.3615138" target="_blank" rel="noopener">Contrastive learning for rumor detection via fitting beta mixture model</a>. CIKM, 2023. CCF-B.' },
    { cite: 'X. Yang, G. Li, C. Zhang, M. Han, W. Yang. <a href="https://www.ijcai.org/proceedings/2023/0739.pdf" target="_blank" rel="noopener">PerCBA: Persistent Clean-label Backdoor Attacks on Semi-Supervised Graph Node Classification</a>. IJCAI Workshop on Artificial Intelligence Safety, 2023.' }
  ],
  preprints: [
    { cite: 'Z. Yu, W. Xing, C. Ye, X. Teng, B. Yang, C. Lin, M. Han. <a href="https://arxiv.org/abs/2605.27157" target="_blank" rel="noopener">Detecting Is Not Resolving: The Monitoring Control Gap in Retrieval Augmented LLMs</a>. arXiv, 2026.' },
    { cite: 'Z. Yu, W. Xing, Y. Wei, B. Yang, C. Ye, G. Li, M. Han. <a href="https://arxiv.org/abs/2605.26778" target="_blank" rel="noopener">The Attribution Blind Spot: Detecting When Language Models Rely on Memory Rather Than Retrieved Context</a>. arXiv, 2026.' },
    { cite: 'Z. Yu, W. Xing, Y. Wei, J. Chen, H. Wang, X. Teng, M. Han. <a href="https://arxiv.org/abs/2605.26789" target="_blank" rel="noopener">Composition Collapse: Stable Factual Knowledge Does Not Imply Compositional Reasoning</a>. arXiv, 2026.' },
    { cite: 'Z. Yu, W. Xing, G. Li, S. Xiong, H. Wang, X. Teng, M. Han. <a href="https://arxiv.org/abs/2605.26754" target="_blank" rel="noopener">Cordon-MAS: Defending RAG against Knowledge Poisoning via Information-Flow Control</a>. arXiv, 2026.' },
    { cite: 'Z. Yu, W. Xing, M. Han. <a href="https://arxiv.org/abs/2604.05358" target="_blank" rel="noopener">LatentAudit: Real-Time White-Box Faithfulness Monitoring for Retrieval-Augmented Generation with Verifiable Deployment</a>. arXiv, 2026.' },
    { cite: 'Z. Yu, W. Xing, M. Han. <a href="https://arxiv.org/abs/2604.05348" target="_blank" rel="noopener">From Retinal Evidence to Safe Decisions: RETINA-SAFE and ECRT for Hallucination Risk Triage in Medical LLMs</a>. arXiv, 2026.' },
    { cite: 'S. Donkada, S. Pouriyeh, R. M. Parizi, M. Han, N. Dehbozorgi, N. Sakib, Q. Z. Sheng. <a href="https://arxiv.org/abs/2308.13714" target="_blank" rel="noopener">Uncovering promises and challenges of federated learning to detect cardiovascular diseases: A scoping literature review</a>. arXiv, 2023.' },
    { cite: 'L. Yu, M. Han, Y. Li, C. Lin, Y. Zhang, M. Zhang, Y. Liu, H. Weng, Y. Jeon, K.-H. Chow, et al. <a href="https://arxiv.org/abs/2402.03688" target="_blank" rel="noopener">A survey of privacy threats and defense in vertical federated learning: From model life cycle perspective</a>. arXiv, 2024.' },
    { cite: 'S. Lin, R. Li, X. Wang, C. Lin, W. Xing, M. Han. <a href="https://arxiv.org/abs/2407.16205" target="_blank" rel="noopener">Figure it out: Analyzing-based jailbreak attack on large language models</a>. arXiv, 2024.' },
    { cite: 'W. Xing, Z. Chen, C. Lin, M. Han. <a href="https://arxiv.org/abs/2508.07602" target="_blank" rel="noopener">HGMF: A Hierarchical Gaussian Mixture Framework for Scalable Tool Invocation by LLM</a>. arXiv, 2025. [Under review]' },
    { cite: 'W. Xing, J. Chen, Z. Yang, C. Lin, J. Dong, C. Chen, X. Zhou, M. Han. UW-3DGS: Underwater 3D Reconstruction with Physics-Aware Gaussian Splatting. arXiv, 2025. [Under review]' },
    { cite: 'W. Xing, M. Li, C. Hu, H. Xu, N. Zhang, B. Lin, M. Han. <a href="https://arxiv.org/abs/2508.10029" target="_blank" rel="noopener">Latent Fusion Jailbreak: Blending Harmful and Harmless Representations to Elicit Unsafe LLM Outputs</a>. arXiv, 2025. [Under review]' },
    { cite: 'W. Xing, J. Chen, Z. Yang, T. Zhao, G. Li, C. Lin, Y. Guo, M. Han. CoDe-NeRF: Neural Rendering via Dynamic Coefficient Decomposition. arXiv, 2025. [Under review]' },
    { cite: 'Z. Xu, W. Xing, Z. Wang, C. Hu, J. Chen, M. Han. <a href="https://arxiv.org/abs/2409.08846" target="_blank" rel="noopener">Fp-vec: Fingerprinting large language models via efficient vector addition</a>. arXiv, 2024. [Under review]' },
    { cite: 'Y. Liu, W. Xing, Y. Zhou, G. Chang, C. Lin, M. Han. <a href="https://arxiv.org/abs/2511.11619" target="_blank" rel="noopener">DIAP: A Decentralized Agent Identity Protocol with Zero-Knowledge Proofs and a Hybrid P2P Stack</a>. arXiv, 2025.' },
    { cite: 'S. Lin, R. Li, X. Wang, C. Lin, W. Xing, M. Han. <a href="https://arxiv.org/abs/2407.16205" target="_blank" rel="noopener">Figure it Out: Analyzing-based Jailbreak Attack on Large Language Models</a>. arXiv, 2024.' },
    { cite: 'R. Li, M. Chen, C. Hu, H. Chen, W. Xing, M. Han. <a href="https://arxiv.org/abs/2409.19521" target="_blank" rel="noopener">Gentel-safe: A unified benchmark and shielding framework for defending against prompt injection attacks</a>. arXiv, 2024.' },
    { cite: 'Z. Xu, X. Yue, Z. Wang, Q. Liu, X. Zhao, J. Zhang, W. Zeng, W. Xing, D. Kong, C. Lin, M. Han. <a href="https://arxiv.org/abs/2508.11548" target="_blank" rel="noopener">Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends</a>. arXiv, 2025. [Under review]' },
    { cite: 'Z. Wang, Z. Xu, M. Li, W. Xing, C. Hu, C. Zhi, M. Han. <a href="https://arxiv.org/abs/2505.06304" target="_blank" rel="noopener">RAP-SM: Robust Adversarial Prompt via Shadow Models for Copyright Verification of Large Language Models</a>. arXiv, 2025. [Under review]' }
  ]
};

/* 研究亮点 - 分层级研究方向（中英） */
window.HIGHLIGHTS = {
  zh: [
    {
      title: '文本水印与模型指纹（Text Watermarking and Model Fingerprint）',
      desc: '发展文本中不可见水印嵌入与唯一模型指纹技术，保护大模型知识产权与真实性。',
      subareas: [
        {
          title: '模型指纹生成与嵌入',
          items: ['InSty：多轮对话中的多级跨粒度指纹嵌入算法', 'CTCC：基于跨轮上下文相关性后门的鲁棒指纹框架', 'LoRA-FP：无缝转移植入指纹到下游模型', 'Fingerprint-Vector：高效向量加法指纹技术', 'Fp-vec：大规模语言模型高效向量指纹']
        },
        {
          title: '指纹检测与追踪',
          items: ['EverTracer：通过隐式概率指纹追踪被盗大模型', 'KINGUARD：分层亲缘关系感知指纹防御LLM窃取', 'RAP-SM：基于影子模型的鲁棒对抗提示版权验证']
        },
        {
          title: '指纹编辑与擦除',
          items: ['MEraser：大语言模型指纹擦除方法', 'FORGETMARK：通过目标遗忘的隐式指纹嵌入', 'PREE：通过知识前缀增强的无害自适应指纹编辑']
        }
      ]
    },
    {
      title: '强化学习（Reinforcement Learning）',
      desc: '探索前沿强化学习算法与应用，聚焦多智能体系统、策略优化与真实场景部署。',
      subareas: [
        {
          title: '多智能体强化学习',
          items: ['多智能体协作与竞争机制', '策略优化与分布式学习', '真实场景部署与应用']
        },
        {
          title: '大模型对齐',
          items: ['基于强化学习的大模型安全对齐', '可信安全防御机制', '多轮对话能力增强']
        },
        {
          title: '策略优化',
          items: ['ICPO：多轮对话中的言外行为校准策略优化', 'Spectral Logit Sculpting：自适应低秩逻辑变换控制文本生成']
        }
      ]
    },
    {
      title: '智能体系统（Agentic Systems）',
      desc: '构建可推理、规划与在复杂环境中交互的自主智能体，应用于机器人、虚拟助手与决策系统。',
      subareas: [
        {
          title: '模型上下文协议',
          items: ['MCP-Guard：模型上下文协议完整性防御框架', 'HGMF：分层高斯混合框架用于可扩展工具调用', '三层协同攻击检测与防御']
        },
        {
          title: '工具调用与规划',
          items: ['多阶段自适应工具调用方法', '难负样本对比学习', '动态状态追踪与规划']
        },
        {
          title: '分布式智能体',
          items: ['DIAP：去中心化智能体身份协议', '零知识证明与混合P2P栈', '多用户匿名身份代理系统']
        }
      ]
    },
    {
      title: '大模型安全与风险（LLM Security & Risk）',
      desc: '研究大模型面临的安全威胁、攻击与防御机制，保障模型安全可靠运行。',
      subareas: [
        {
          title: 'Jailbreak攻击与防御',
          items: ['Figure it Out：基于分析的Jailbreak攻击', 'Latent Fusion Jailbreak：混合有害与无害表示引发不安全输出', 'Gentel-safe：统一基准与防护框架防御提示注入攻击']
        },
        {
          title: '后门检测与防御',
          items: ['Distill To Detect：通过知识蒸馏放大后门模型异常', '基于模型同化的可疑模型后门类别定位', '动态调控的安全保护防御方法']
        },
        {
          title: '幻觉检测与缓解',
          items: ['DISF：通过双路径内部状态强制检测RAG中的幻觉', 'LatentAudit：RAG白盒忠实度实时监测与可验证部署', 'Attribution Blind Spot：检测模型依赖记忆而非检索上下文', 'Detecting Is Not Resolving：揭示RAG监测—控制鸿沟', 'RETINA-SAFE：医疗大模型幻觉风险分层与安全决策']
        }
      ]
    },
    {
      title: '多模态大模型（Multimodal Large Models）',
      desc: '探索视觉-语言多模态融合、神经渲染与3D重建等前沿技术。',
      subareas: [
        {
          title: '神经渲染与新视角合成',
          items: ['CasTensoRF：级联张量辐射场新视角合成', 'IRCasTRF：多视图图像逆渲染优化', 'MVSPlenOctree：多视图立体快速重建', 'Temporal-MPI：动态场景建模', 'NCDI-Diffusion：扩散模型新视角合成', 'CoDe-NeRF：动态系数分解神经渲染']
        },
        {
          title: '3D重建与场景理解',
          items: ['UW-3DGS：基于物理感知高斯飞溅的水下3D重建', 'Scale-Consistent Fusion：异构局部采样到全局沉浸式渲染', 'Robust Local Light Field Synthesis：遮挡感知采样与深度视觉特征融合']
        },
        {
          title: '多模态伪造检测',
          items: ['IDCNet：图像分解与跨视图蒸馏通用深度伪造检测', '基于热图引导的三模态级联融合视觉-语言模型伪造检测', 'Deepfake Video Traceability：深度伪造视频溯源与认证']
        }
      ]
    },
    {
      title: '大模型对齐与可信AI（LLM Alignment & Trustworthy AI）',
      desc: '研究大模型安全对齐、可信性评估与安全保护机制。',
      subareas: [
        {
          title: '安全对齐',
          items: ['基于神经元再学习的安全对齐风险评估', '面向不同年龄段儿童的语言模型安全评估', 'SproutBench：面向青少年的安全与伦理大语言模型基准']
        },
        {
          title: '可信性评估',
          items: ['基于双层引导稀疏策略的大视觉语言模型鲁棒性评估', '多模态医疗AI决策行为一致性评估', 'IDE：多智能体驱动的动态评估框架']
        },
        {
          title: '能力增强',
          items: ['基于梯度与强化学习的语言模型干预', '多阶段自适应和难负样本对比学习的工具调用', '基于强化学习的多轮对话能力增强']
        }
      ]
    },
    {
      title: '具身智能（Embodied AI）',
      desc: '研究具身智能系统的安全性与可靠性，探索机器人、虚拟助手等应用场景。',
      subareas: [
        {
          title: '安全与漏洞',
          items: ['Towards robust and secure embodied AI：漏洞与攻击综述', 'GenBEV：生成式模型与语义补偿的鸟瞰图分割', '具身智能系统安全评估']
        },
        {
          title: '感知与决策',
          items: ['多模态感知融合', '复杂环境交互', '自主决策系统']
        }
      ]
    },
    {
      title: '区块链与可信系统（Blockchain & Trusted Systems）',
      desc: '研究区块链共识算法、隐私保护与可信系统构建。',
      subareas: [
        {
          title: '共识算法',
          items: ['基于双DAG的异构工业物联网节点高效安全共识算法', '大规模节点轻量级共识算法', '基于分层粒子群优化的资源监测与动态调度']
        },
        {
          title: '隐私保护',
          items: ['基于区块链与差分隐私的交易过程数据发布', '智能合约辅助的隐私保护数据聚合', '零知识认证方案']
        },
        {
          title: '可信系统',
          items: ['基于区块链与模型指纹的模型权重所有权确认', '链上链下身份关联与验证架构', '支持多用户匿名身份代理的智能体可信交互系统']
        }
      ]
    },
    {
      title: '图神经网络与网络分析（Graph Neural Networks & Network Analysis）',
      desc: '研究图表示学习、网络嵌入与时序图分析技术。',
      subareas: [
        {
          title: '图表示学习',
          items: ['NE-WNA：无需邻域聚合的网络嵌入框架', 'Graph Representation Learning via Adaptive Multi-layer Neighborhood Diffusion Contrast', 'Beyond contrastive learning：自适应图表示与互信息最大化']
        },
        {
          title: '时序图分析',
          items: ['Rethinking multi-level information fusion in temporal graphs：预训练后蒸馏', 'Embedding temporal networks inductively via mining neighborhood and community influences', '传播结构融合用于谣言检测']
        },
        {
          title: '应用场景',
          items: ['谣言检测与假新闻识别', '区块链系统分析', '社交网络分析']
        }
      ]
    },
    {
      title: '联邦学习与隐私计算（Federated Learning & Privacy Computing）',
      desc: '研究联邦学习中的隐私保护技术与医疗健康应用。',
      subareas: [
        {
          title: '隐私保护技术',
          items: ['Privacy-enhancing technologies in federated learning for healthcare IoT', 'Privacy-preserving federated learning-based intrusion detection system', '差分隐私与安全聚合']
        },
        {
          title: '医疗健康应用',
          items: ['Federated Learning in Smart Healthcare：应用、挑战与未来方向', '医疗语言模型评估方法', '多模态医疗AI决策行为一致性评估']
        }
      ]
    },
    {
      title: '专业领域应用（Domain Applications）',
      desc: '将AI技术应用于数字文化遗产、医疗健康等专业领域。',
      subareas: [
        {
          title: '数字文化遗产',
          items: ['基于神经符号与多智能体协同的数字文化遗产活化与动态推演系统', '文化内容生成与保护', '历史数据挖掘与分析']
        },
        {
          title: '医疗健康',
          items: ['基于动态代价图匹配与推理路径逻辑审查的医疗语言模型评估', '多模态医疗AI决策行为一致性评估', '医疗数据隐私保护']
        }
      ]
    }
  ],
  en: [
    {
      title: 'Text Watermarking and Model Fingerprint',
      desc: 'Developing advanced techniques for embedding invisible watermarks in text and creating unique model fingerprints to protect IP and ensure model authenticity.',
      subareas: [
        {
          title: 'Fingerprint Generation & Embedding',
          items: ['InSty: Multi-level cross-granularity fingerprint embedding for multi-turn dialogue', 'CTCC: Robust fingerprinting framework via cross-turn contextual correlation backdoor', 'LoRA-FP: Seamless transfer implantation of fingerprints in downstream models', 'Fingerprint-Vector: Efficient vector addition fingerprinting', 'Fp-vec: Efficient vector fingerprinting for large language models']
        },
        {
          title: 'Fingerprint Detection & Tracking',
          items: ['EverTracer: Hunting stolen LLMs via stealthy and robust probabilistic fingerprint', 'KINGUARD: Hierarchical kinship-aware fingerprinting to defend against LLM stealing', 'RAP-SM: Robust adversarial prompt via shadow models for copyright verification']
        },
        {
          title: 'Fingerprint Editing & Erasure',
          items: ['MEraser: Effective fingerprint erasure approach for large language models', 'FORGETMARK: Stealthy fingerprint embedding via targeted unlearning', 'PREE: Harmless and adaptive fingerprint editing via knowledge prefix enhancement']
        }
      ]
    },
    {
      title: 'Reinforcement Learning',
      desc: 'Exploring cutting-edge reinforcement learning algorithms and applications, focusing on multi-agent systems, policy optimization, and real-world deployment.',
      subareas: [
        {
          title: 'Multi-Agent RL',
          items: ['Multi-agent collaboration and competition mechanisms', 'Policy optimization and distributed learning', 'Real-world deployment and applications']
        },
        {
          title: 'LLM Alignment',
          items: ['RL-based safety alignment for large language models', 'Trusted safety defense mechanisms', 'Multi-turn dialogue capability enhancement']
        },
        {
          title: 'Policy Optimization',
          items: ['ICPO: Illocution-calibrated policy optimization for multi-turn conversation', 'Spectral Logit Sculpting: Adaptive low-rank logit transformation for controlled text generation']
        }
      ]
    },
    {
      title: 'Agentic Systems',
      desc: 'Building intelligent autonomous agents that can reason, plan, and interact in complex environments; applications in robotics, virtual assistants, and decision-making.',
      subareas: [
        {
          title: 'Model Context Protocol',
          items: ['MCP-Guard: Defense framework for model context protocol integrity', 'HGMF: Hierarchical Gaussian mixture framework for scalable tool invocation', 'Three-layer collaborative attack detection and defense']
        },
        {
          title: 'Tool Invocation & Planning',
          items: ['Multi-stage adaptive tool invocation methods', 'Hard negative contrastive learning', 'Dynamic state tracking and planning']
        },
        {
          title: 'Distributed Agents',
          items: ['DIAP: Decentralized agent identity protocol', 'Zero-knowledge proofs and hybrid P2P stack', 'Multi-user anonymous identity proxy systems']
        }
      ]
    },
    {
      title: 'LLM Security & Risk',
      desc: 'Researching security threats, attacks, and defense mechanisms for large language models to ensure safe and reliable operation.',
      subareas: [
        {
          title: 'Jailbreak Attacks & Defense',
          items: ['Figure it Out: Analyzing-based jailbreak attack on LLMs', 'Latent Fusion Jailbreak: Blending harmful and harmless representations to elicit unsafe outputs', 'Gentel-safe: Unified benchmark and shielding framework for defending against prompt injection attacks']
        },
        {
          title: 'Backdoor Detection & Defense',
          items: ['Distill To Detect: Amplifying anomalies in backdoor models through knowledge distillation', 'Locating backdoor classes in suspicious models via model assimilation', 'Dynamic regulation-based safety protection defense methods']
        },
        {
          title: 'Hallucination Detection & Mitigation',
          items: ['DISF: Detecting hallucinations in RAG via dual-path internal state forcing', 'LatentAudit: Real-time white-box faithfulness monitoring for RAG', 'Attribution Blind Spot: Detecting memory-vs-retrieval reliance', 'Detecting Is Not Resolving: The monitoring–control gap in RAG', 'RETINA-SAFE: Hallucination risk triage for medical LLMs']
        }
      ]
    },
    {
      title: 'Multimodal Large Models',
      desc: 'Exploring cutting-edge technologies in vision-language multimodal fusion, neural rendering, and 3D reconstruction.',
      subareas: [
        {
          title: 'Neural Rendering & Novel View Synthesis',
          items: ['CasTensoRF: Cascaded tensorial radiance fields for novel view synthesis', 'IRCasTRF: Inverse rendering by optimizing cascaded tensorial radiance fields', 'MVSPlenOctree: Fast reconstruction of radiance fields from multi-view stereo', 'Temporal-MPI: Multi-plane images for dynamic scene modelling', 'NCDI-Diffusion: Neural contextual and directional inversion to diffusion models', 'CoDe-NeRF: Neural rendering via dynamic coefficient decomposition']
        },
        {
          title: '3D Reconstruction & Scene Understanding',
          items: ['UW-3DGS: Underwater 3D reconstruction with physics-aware Gaussian splatting', 'Scale-Consistent Fusion: From heterogeneous local sampling to global immersive rendering', 'Robust Local Light Field Synthesis: Occlusion-aware sampling and deep visual feature fusion']
        },
        {
          title: 'Multimodal Forgery Detection',
          items: ['IDCNet: Image decomposition and cross-view distillation for generalizable deepfake detection', 'Heatmap-guided tri-modal cascaded fusion visual-language model forgery detection', 'Deepfake Video Traceability: Source attribution and authentication']
        }
      ]
    },
    {
      title: 'LLM Alignment & Trustworthy AI',
      desc: 'Researching safety alignment, trustworthiness evaluation, and security protection mechanisms for large language models.',
      subareas: [
        {
          title: 'Safety Alignment',
          items: ['Safety alignment risk assessment via neuron relearning', 'Language model safety evaluation for children of different ages', 'SproutBench: Benchmark for safe and ethical LLMs for youth']
        },
        {
          title: 'Trustworthiness Evaluation',
          items: ['Robustness evaluation of large vision-language models via dual-layer guided sparse strategy', 'Multimodal medical AI decision behavior consistency evaluation', 'IDE: Multi-agent-driven iterative framework for dynamic evaluation']
        },
        {
          title: 'Capability Enhancement',
          items: ['Language model intervention via gradient and reinforcement learning', 'Tool invocation via multi-stage adaptive and hard negative contrastive learning', 'Multi-turn dialogue capability enhancement via reinforcement learning']
        }
      ]
    },
    {
      title: 'Embodied AI',
      desc: 'Researching security and reliability of embodied AI systems, exploring applications in robotics and virtual assistants.',
      subareas: [
        {
          title: 'Security & Vulnerabilities',
          items: ['Towards robust and secure embodied AI: Survey on vulnerabilities and attacks', 'GenBEV: Generative model with semantic compensation for bird\'s eye view segmentation', 'Security evaluation of embodied AI systems']
        },
        {
          title: 'Perception & Decision',
          items: ['Multimodal perception fusion', 'Complex environment interaction', 'Autonomous decision systems']
        }
      ]
    },
    {
      title: 'Blockchain & Trusted Systems',
      desc: 'Researching blockchain consensus algorithms, privacy protection, and trusted system construction.',
      subareas: [
        {
          title: 'Consensus Algorithms',
          items: ['Efficient and secure blockchain consensus algorithm for heterogeneous IoT nodes based on double-DAG', 'Large-scale node lightweight consensus algorithm', 'Resource monitoring and dynamic scheduling based on hierarchical particle swarm optimization']
        },
        {
          title: 'Privacy Protection',
          items: ['Transaction data publication based on blockchain and differential privacy', 'Smart contract assisted privacy-preserving data aggregation', 'Zero-knowledge authentication schemes']
        },
        {
          title: 'Trusted Systems',
          items: ['Model weight ownership confirmation based on blockchain and model fingerprint', 'On-chain and off-chain identity association and verification architecture', 'Agent trusted interaction systems supporting multi-user anonymous identity proxy']
        }
      ]
    },
    {
      title: 'Graph Neural Networks & Network Analysis',
      desc: 'Researching graph representation learning, network embedding, and temporal graph analysis techniques.',
      subareas: [
        {
          title: 'Graph Representation Learning',
          items: ['NE-WNA: Novel network embedding framework without neighborhood aggregation', 'Graph Representation Learning via Adaptive Multi-layer Neighborhood Diffusion Contrast', 'Beyond contrastive learning: Adaptive graph representations with mutual information maximization']
        },
        {
          title: 'Temporal Graph Analysis',
          items: ['Rethinking multi-level information fusion in temporal graphs: Pre-training then distilling', 'Embedding temporal networks inductively via mining neighborhood and community influences', 'Propagation structure fusion for rumor detection']
        },
        {
          title: 'Applications',
          items: ['Rumor detection and fake news identification', 'Blockchain system analysis', 'Social network analysis']
        }
      ]
    },
    {
      title: 'Federated Learning & Privacy Computing',
      desc: 'Researching privacy-preserving technologies in federated learning and healthcare applications.',
      subareas: [
        {
          title: 'Privacy-Preserving Technologies',
          items: ['Privacy-enhancing technologies in federated learning for healthcare IoT', 'Privacy-preserving federated learning-based intrusion detection system', 'Differential privacy and secure aggregation']
        },
        {
          title: 'Healthcare Applications',
          items: ['Federated Learning in Smart Healthcare: Applications, challenges, and future directions', 'Medical language model evaluation methods', 'Multimodal medical AI decision behavior consistency evaluation']
        }
      ]
    },
    {
      title: 'Domain Applications',
      desc: 'Applying AI technologies to specialized domains such as digital cultural heritage and healthcare.',
      subareas: [
        {
          title: 'Digital Cultural Heritage',
          items: ['Digital cultural heritage activation and dynamic deduction system via neuro-symbolic and multi-agent collaboration', 'Cultural content generation and protection', 'Historical data mining and analysis']
        },
        {
          title: 'Healthcare',
          items: ['Medical language model evaluation via dynamic cost graph matching and reasoning path logic review', 'Multimodal medical AI decision behavior consistency evaluation', 'Medical data privacy protection']
        }
      ]
    }
  ]
};
if (window.HIGHLIGHTS) {
  window.HIGHLIGHTS.zhtw = window.HIGHLIGHTS.zh;
  window.HIGHLIGHTS.ja = window.HIGHLIGHTS.en;
  window.HIGHLIGHTS.ko = window.HIGHLIGHTS.en;
  window.HIGHLIGHTS.th = window.HIGHLIGHTS.en;
}

/* 专利完整列表见 patents-data.js（PATENTS_FULL） */
