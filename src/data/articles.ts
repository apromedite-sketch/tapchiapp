/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Article, CategoryInfo } from "../types";

export const CATEGORIES: CategoryInfo[] = [
  {
    name: "Lục Quân",
    slug: "luc-quan",
    description: "Thế giới của các mô hình xe tăng bọc thép, trận chiến sa bàn hào hùng, pháo tự hành và các khí tài quân sự mặt đất huyền thoại qua các thời kỳ.",
    iconName: "Shield"
  },
  {
    name: "Hải Quân",
    slug: "hai-quan",
    description: "Khám phá các mô hình tàu sân bay khổng lồ, tàu ngầm tàng hình sâu thẳm, thiết giáp hạm lịch sử và nghệ thuật đổ đổ biển bằng keo epoxy chân thực.",
    iconName: "Waves"
  },
  {
    name: "Không Quân",
    slug: "khong-quan",
    description: "Bộ sưu tập tiêm kích tàng hình siêu thanh thế hệ mới, trực thăng tấn công vũ trang, máy bay ném bom chiến lược và kỹ thuật tạo vệt khói chân thực.",
    iconName: "Plane"
  },
  {
    name: "Khác",
    slug: "khac",
    description: "Nơi hội tụ của mô hình cơ giáp Mech Gundam, chiến hạm không gian viễn tưởng, mô hình bọc thép tương lai và các dự án sáng tạo đột phá.",
    iconName: "Sparkles"
  }
];

export const ARTICLES: Article[] = [
  // --- LỤC QUÂN (10 articles) ---
  {
    id: "lq-1",
    title: "Mô hình xe tăng chủ lực T-90MS tỉ lệ 1:35 cực kỳ tinh xảo",
    slug: "mo-hinh-xe-tang-t-90ms-ti-le-1-35",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=600",
    excerpt: "Đánh giá chi tiết bộ kit mô hình xe tăng T-90MS tỉ lệ 1:35 từ hãng Trumpeter. Kỹ thuật ghép xích nhựa rời, lắp ráp giáp phản ứng nổ ERA và sơn ngụy trang kỹ thuật số đẹp mắt.",
    content: `### Giới thiệu về xe tăng chủ lực T-90MS
Xe tăng T-90MS là phiên bản xuất khẩu hiện đại hóa sâu sắc của dòng xe tăng chiến đấu chủ lực T-90 huyền thoại. Với những cải tiến vượt trội về hỏa lực, giáp bảo vệ và hệ thống điều khiển hỏa lực Kalina, T-90MS là niềm mơ ước của nhiều nhà sưu tầm mô hình quân sự trên thế giới.

### Chi tiết bộ kit ráp mô hình từ Trumpeter
Hộp mô hình bao gồm hơn 1000 chi tiết nhựa, đi kèm vỉ chi tiết kim loại phot-etched (PE) cực kỳ chất lượng để nâng cấp các lưới tản nhiệt động cơ và lá chắn bùn. Xích xe là loại xích lắp ghép từng mắt độc lập, đòi hỏi sự kiên nhẫn cao độ nhưng mang lại hiệu ứng rủ xích tự nhiên vô cùng chân thực mà xích cao su dẻo thông thường không thể so sánh được.

### Quá trình thực hiện & Sơn Weathering
1. **Lắp ráp phần khung gầm:** Đảm bảo hệ thống treo cân đối để bánh chịu lực bám sát mặt đất.
2. **Sơn lót (Primer):** Sử dụng sơn lót xám gốc lacquer để tăng độ bám cho các lớp sơn màu tiếp theo.
3. **Sơn màu nền chính (Base Coat):** Sơn màu vàng cát sa mạc phối cùng các mảng ngụy trang xanh lá thẫm và nâu đất ấm.
4. **Hiệu ứng phong sương (Weathering):** Sử dụng sơn dầu màu nâu thẫm rửa (wash) để làm nổi bật các khe kẽ cơ khí. Tiếp theo, dùng phấn màu pastel mô phỏng bụi cát sa mạc bám ở xích và gầm xe. Cuối cùng, kỹ thuật dry-brush tạo vết xước kim loại ở mép nắp tháp pháo và xẻng công binh.

Dự án này mất khoảng 45 giờ làm việc liên tục để đạt đến độ hoàn hảo tối đa. Đây xứng đáng là một kiệt tác trưng bày trong bất kỳ bộ sưu tập mô hình lục quân nào.`,
    publishedAt: "2026-06-15",
    viewCount: 15420,
    ranking: 1,
    tags: ["Mô hình tăng", "T-90MS", "Trumpeter", "Sơn weathering", "Tỷ lệ 1:35"],
    pdfUrl: "/files/review-t90ms.pdf",
    isFeatured: true,
    isNew: false
  },
  {
    id: "lq-2",
    title: "Nghệ thuật dựng sa bàn chiến tranh mùa đông Ardennes năm 1944",
    slug: "nghe-thuat-sa-ban-chien-tranh-mua-dong-ardennes-1944",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?auto=format&fit=crop&q=80&w=600",
    excerpt: "Cách tái hiện lớp tuyết phủ dày chân thực trên cành cây khô, kỹ thuật tạo bùn đông cứng bám trên bánh xích xe tăng Tiger II và tạo dáng lính bộ binh kiên cường.",
    content: `### Bối cảnh lịch sử Trận Ardennes
Chiến dịch Ardennes diễn ra vào mùa đông khắc nghiệt năm 1944, đánh dấu nỗ lực phản công cuối cùng của quân đội Đức trên mặt trận phía Tây. Sa bàn tái hiện một góc rừng thông phủ tuyết trắng xóa, nơi một chiếc xe tăng hạng nặng Tiger II (King Tiger) đang dẫn đầu nhóm bộ binh tiến quân qua một con đường mòn bùn lầy đóng băng.

### Các bước tạo tuyết giả siêu thực
Tuyết là linh hồn của sa bàn này. Tránh sử dụng bông gòn vì trông rất giả. Hãy sử dụng hỗn hợp:
- Bột baking soda chất lượng cao.
- Keo sữa PVA trong suốt.
- Nước sạch và một ít sơn acrylic trắng.

Trộn đều hỗn hợp này thành dạng sệt và quét lên mặt đất sa bàn. Để tạo hiệu ứng tuyết mới rơi xốp mềm, rải trực tiếp một lớp bột baking soda khô lên trên qua một chiếc rây lọc khi keo sữa còn ướt. Đối với tuyết đóng băng trên tán cây, dùng keo phun xịt tóc định hình sau đó rắc bột tuyết mịn lên.

### Kỹ thuật sơn hiệu ứng bùn đông lạnh
Bùn đất mùa đông có độ ẩm cao và xám xịt do tàn tích tro tàn chiến tranh. Sử dụng hỗn hợp thạch cao cát mịn pha sơn dầu màu nâu đen thẫm, quét lên hệ thống gầm xích xe tăng King Tiger, sau đó phủ một lớp keo epoxy bóng loáng để giả hiệu ứng nước bùn đang tan chảy mượt mà.`,
    publishedAt: "2026-06-20",
    viewCount: 12980,
    ranking: 2,
    tags: ["Sa bàn", "Ardennes", "Tuyêt giả", "King Tiger", "Thế chiến II"],
    isFeatured: true,
    isNew: true
  },
  {
    id: "lq-3",
    title: "Pháo tự hành CAESAR: Nghệ thuật pháo binh hiện đại của Pháp",
    slug: "phao-tu-hanh-caesar-nghe-thuat-phao-binh-phap",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=600",
    excerpt: "Hành trình chế tác mô hình hệ thống pháo tự hành bánh lốp CAESAR 155mm trứ danh. Khám phá chi tiết cơ cấu nâng hạ nòng pháo đúc bằng kim loại đồng thau.",
    content: `Hệ thống pháo tự hành CAESAR là một trong những thành tựu pháo binh nổi bật nhất của quân đội Pháp. Với khả năng bắn và rút lui cực nhanh (shoot-and-scoot), CAESAR mang lại hiệu suất chiến thuật vượt trội trên chiến trường hiện đại.

Mô hình tỉ lệ 1:35 tái hiện chính xác bệ phóng đặt trên khung gầm xe tải bọc thép bánh lốp 6x6. Chi tiết nòng pháo kim loại nâng cấp bằng đồng được tích hợp giúp tạo độ nặng vững chãi và cảm giác chân thực vượt trội so với nòng nhựa ghép đôi nguyên bản. Các chi tiết thủy lực nâng hạ nòng pháo được xi mạ bạc bóng loáng tỉ mỉ.`,
    publishedAt: "2026-05-18",
    viewCount: 9410,
    ranking: 3,
    tags: ["Pháo tự hành", "CAESAR", "Pháp", "Đồng thau", "Mô hình pháo"],
    isNew: false
  },
  {
    id: "lq-4",
    title: "Xe thiết giáp bọc thép tương lai - Ý tưởng đột phá năm 2050",
    slug: "xe-thiet-giap-boc-thep-tuong-lai-2050",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600",
    excerpt: "Chiêm ngưỡng mô hình thiết kế xe bọc thép bánh lốp trang bị pháo laser và giáp điện từ chủ động, sơn phối màu ngụy trang kỹ thuật số viễn tưởng góc cạnh.",
    content: `Khí tài lục quân năm 2050 sẽ trông như thế nào? Dự án thiết kế ý tưởng này mang đến câu trả lời thông qua mẫu xe thiết giáp trinh sát hạng nặng thế hệ mới. Được trang bị tháp pháo năng lượng định hướng tự động hoàn toàn và hệ thống động cơ lai điện chống ồn vượt trội.

Về mặt mô hình, vỏ xe được chế tác từ các mảng nhựa styrene phẳng ép nhiệt góc cạnh sắc nét, tạo vẻ hầm hố hiện đại. Lớp giáp phản ứng điện từ được sơn màu xám niken ánh kim lạnh lùng phối cùng các đường chỉ LED màu xanh lục huỳnh quang tạo hiệu ứng công nghệ cao rực rỡ dưới bóng tối dải đèn studio.`,
    publishedAt: "2026-07-01",
    viewCount: 8900,
    ranking: 4,
    tags: ["Sci-Fi", "Thiết giáp", "Tương lai", "Sơn phản quang"],
    isNew: true
  },
  {
    id: "lq-5",
    title: "Kỹ thuật weathering tạo vết rỉ sét chân thực trên mô hình xe tăng",
    slug: "ky-thuat-weathering-ri-set-mo-hinh-xe-tang",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
    excerpt: "Hướng dẫn từng bước sử dụng bộ hóa chất chuyên dụng và phương pháp 'hairspray technique' huyền thoại để tạo các mảng tróc sơn rỉ sét tự nhiên nhất.",
    content: `Weathering (tạo hiệu ứng cũ kỹ, hao mòn theo thời gian) là ranh giới phân định một món đồ chơi nhựa thông thường và một tác phẩm nghệ thuật mô hình đích thực. Trong bài viết này, chúng tôi sẽ hướng dẫn bạn phương pháp tạo rỉ sét tự nhiên bằng kỹ thuật keo xịt tóc (Hairspray Technique).

### Các bước thực hiện:
1. **Sơn màu rỉ sét nền:** Sơn hỗn hợp màu nâu đỏ, cam rỉ sét và đen lên toàn bộ các vị trí mép kim loại chịu mòn nhiều.
2. **Phủ lớp bảo vệ & Keo xịt tóc:** Phủ một lớp sơn bóng acrylic bảo vệ, sau đó phun một lớp keo xịt tóc thông thường lên trên.
3. **Sơn màu ngụy trang chính:** Chờ keo khô trong 15 phút rồi sơn lớp màu ngụy trang lục quân chính lên toàn bộ thân xe.
4. **Cọ xước với nước:** Dùng cọ nhúng nước ấm ẩm vuốt nhẹ lên các vị trí muốn tróc sơn. Nước sẽ thấm qua lớp sơn ngoài, hòa tan lớp keo xịt tóc bên dưới tạo ra những mảng sơn bong tróc nham nhở viền rỉ sét ngẫu nhiên cực kỳ tự nhiên.`,
    publishedAt: "2026-04-12",
    viewCount: 8200,
    ranking: 5,
    tags: ["Weathering", "Rỉ sét", "Hairspray technique", "Kỹ thuật sơn"],
    isNew: false
  },
  {
    id: "lq-6",
    title: "Mô hình lính dù Sư đoàn 101 Mỹ - Kỹ thuật sơn mặt đỉnh cao",
    slug: "mo-hinh-linh-du-101-my-ky-thuat-son-mat",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?auto=format&fit=crop&q=80&w=600",
    excerpt: "Nghệ thuật thổi hồn vào các bức tượng lính siêu nhỏ tỉ lệ 1:16. Sử dụng sơn nước Vallejo chuyên dụng để mô tả ánh mắt sâu và cơ mặt biểu cảm chân thực.",
    content: `Vẽ mặt tượng lính siêu nhỏ luôn là thử thách khó khăn nhất đối với bất kỳ nghệ nhân mô hình nào. Tượng lính dù sư đoàn 101 Mỹ trong chiến dịch Normandy là một chủ đề cổ điển nhưng đầy chiều sâu xúc cảm.

Bí quyết nằm ở việc sử dụng sơn màu nước Acrylic hãng Vallejo có độ mịn phân tử cực cao. Quy trình bắt đầu từ việc sơn lót màu da sẫm bóng, sau đó dựng các khối sáng tối của gò má, hốc mắt bằng kỹ thuật pha loãng sơn nhiều lớp (glazing). Điểm sáng nhỏ xíu màu trắng ở con ngươi mắt sẽ lập tức thổi hồn sống động vào gương mặt người lính dũng cảm bước vào sinh tử chiến trường.`,
    publishedAt: "2026-03-30",
    viewCount: 7850,
    ranking: 6,
    tags: ["Tượng lính", "Lính dù 101", "Vallejo", "Sơn mặt"],
    isNew: false
  },
  {
    id: "lq-7",
    title: "Lịch sử xe tăng Tiger I và sự trỗi dậy của quái vật hạng nặng Đức",
    slug: "lich-su-xe-tang-tiger-i-quai-vat-hang-nang-duc",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tìm hiểu dòng tăng Tiger I vang danh thế giới với khẩu pháo 88mm uy lực vô song tàn phá mọi phòng tuyến Đồng Minh trong Thế chiến thứ hai.",
    content: `Xe tăng hạng nặng Tiger I (Panzer VI) là một trong những vũ khí đáng sợ và nổi tiếng nhất của Đức quốc xã trong Thế chiến II. Sở hữu giáp trước cực dày và khẩu pháo 8.8 cm KwK 36 uy lực, Tiger I có thể tiêu diệt bất kỳ xe tăng đối phương nào từ khoảng cách an toàn trước khi chúng kịp bắn trả.

Bài viết này đi sâu phân tích cấu trúc cơ khí đặc trưng của bánh xích xếp chồng xen kẽ (Schachtellaufwerk) nổi tiếng của kỹ sư Heinrich Kniepkamp. Thiết kế này phân phối trọng lượng tuyệt vời nhưng lại là cơn ác mộng bảo trì trong bùn đất đông cứng của mùa đông nước Nga khắc nghiệt.`,
    publishedAt: "2026-02-15",
    viewCount: 7120,
    ranking: 7,
    tags: ["Tiger I", "Lịch sử quân sự", "Xe tăng Đức", "Thế chiến II"],
    isNew: false
  },
  {
    id: "lq-8",
    title: "Hệ thống pháo phản lực phóng loạt HIMARS trong sa bàn hiện đại",
    slug: "he-thong-phao-phan-luc-himars-sa-ban-hien-dai",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=600",
    excerpt: "Dựng sa bàn chiến thuật mô phỏng khoảnh khắc bệ phóng tên lửa M142 HIMARS khai hỏa phóng đạn rực cháy giữa màn đêm tỉnh mịch dã ngoại đồng cỏ.",
    content: `M142 HIMARS là hệ thống pháo phản lực cơ động cao phóng loạt dẫn đường bằng GPS chính xác vượt trội. Đây là nhân tố thay đổi cuộc chơi trong nhiều xung đột hiện đại gần đây nhờ tính cơ động dã chiến xuất sắc.

Trong sa bàn này, nghệ nhân tái hiện thời khắc khai hỏa ấn tượng. Vệt khói lửa cực mạnh phun ra từ ống phóng tên lửa được chế tác từ bông thủy tinh mịn pha tẩm đèn LED cam nhấp nháy phát sáng bên trong lớp nhựa resin mờ. Toàn bộ xe và khung cảnh bừng sáng lung linh rực rỡ đầy lôi cuốn nghệ thuật thị giác.`,
    publishedAt: "2026-05-02",
    viewCount: 6890,
    ranking: 8,
    tags: ["HIMARS", "Pháo phản lực", "Đèn LED mô hình", "Sa bàn hiện đại"],
    isNew: false
  },
  {
    id: "lq-9",
    title: "Robot chiến đấu mặt đất Uran-9 - Tương lai của bộ binh cơ giới",
    slug: "robot-chien-dau-mat-dat-uran-9-tuong-lai-bo-binh",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1533560224820-fb7c9c2243d5?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tìm hiểu mẫu robot bọc thép không người lái Uran-9 của Nga trang bị pháo tự động 30mm và tên lửa chống tăng Ataka dẫn đường từ xa tầm xa hiệu quả.",
    content: `Uran-9 đại diện cho kỷ nguyên robot hóa chiến trường lục quân. Được thiết kế cho các hoạt động trinh sát, hỗ trợ hỏa lực bộ binh cơ giới trực tiếp mà không cần sự hiện diện trực tiếp của con người trong làn mưa bom bão đạn nguy hiểm.

Về mặt lắp ráp mô hình, mẫu kit resin này có thiết kế nhỏ gọn tinh xảo nhưng cực kỳ chi tiết ở hệ thống cảm biến quang điện tử, ra-đa quét tầm nhiệt và bệ phóng tên lửa kép hông xe. Màu sơn chủ đạo là xám sẫm quân sự phối sọc vàng rực tương phản lôi cuốn.`,
    publishedAt: "2026-03-10",
    viewCount: 5410,
    ranking: 9,
    tags: ["Uran-9", "Robot chiến đấu", "Resin kit", "Quân đội Nga"],
    isNew: false
  },
  {
    id: "lq-10",
    title: "Mô hình thiết giáp chở quân BTR-82A phiên bản đặc nhiệm ngụy trang",
    slug: "mo-hinh-thiet-giap-btr-82a-dac-nhiem-nguy-trang",
    category: "Lục Quân",
    categorySlug: "luc-quan",
    coverImage: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=600",
    excerpt: "Lắp ráp xe bọc thép chở quân 8 bánh hơi BTR-82A phiên bản nâng cấp tháp pháo 30mm tự động cực ngầu từ hãng sản xuất Zvezda danh tiếng.",
    content: `BTR-82A là dòng xe thiết giáp chở quân bánh hơi (8x8) đa năng vô cùng cơ động của lực lượng đổ bộ đường không và bộ binh hải quân đặc nhiệm. Nó nổi bật với tháp pháo tự động 30mm tích hợp bộ ổn định thăng bằng hai trục xuất sắc.

Mô hình Zvezda tỉ lệ 1:35 tái hiện cực tốt độ dẻo dai của bánh lốp cao su gai địa hình lớn hầm hố. Lớp sơn ngụy trang sọc rằn ri 3 màu đặc trưng được thực hiện bằng cọ khí airbrush đầu phun 0.2mm mảnh mai cho độ chuyển màu mịn mượt sương khói chân thực tuyệt đẹp.`,
    publishedAt: "2026-01-22",
    viewCount: 4980,
    ranking: 10,
    tags: ["BTR-82A", "Xe thiết giáp", "Zvezda", "Airbrush ngụy trang"],
    isNew: false
  },

  // --- HẢI QUÂN (10 articles) ---
  {
    id: "hq-1",
    title: "Siêu tàu sân bay USS Gerald R. Ford tỷ lệ 1:700 bằng nhựa resin cực khủng",
    slug: "sieu-tau-san-bay-uss-gerald-r-ford-ti-le-1-700",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1507682531662-421b17ac4f93?auto=format&fit=crop&q=80&w=600",
    excerpt: "Đánh giá chi tiết mẫu siêu hàng không mẫu hạm lớp Ford tối tân nhất của hải quân Hoa Kỳ. Chiêm ngưỡng dàn máy bay tiêm kích F-35C cánh gập cực nhỏ tí hon trên boong tàu sân bay.",
    content: `### Siêu hàng không mẫu hạm thế hệ mới của Mỹ
USS Gerald R. Ford (CVN-78) là chiếc đầu tiên trong lớp tàu sân bay chạy bằng năng lượng hạt nhân thế hệ mới nhất của Hải quân Mỹ. Sở hữu những cải tiến đột phá như hệ thống phóng máy bay bằng điện từ (EMALS) thay thế bệ phóng hơi nước truyền thống, CVN-78 mang lại công suất xuất kích máy bay tiêm kích vượt trội.

### Chế tác mô hình nhựa Resin kết hợp chi tiết PE
Với tỉ lệ 1:700, thân tàu dài hơn 48cm nhưng chứa đựng hàng ngàn chi tiết tinh vi. Boong bay phẳng rộng lớn được nâng cấp dán miếng decal phủ nhám đặc biệt giả boong thép chống trượt. Để tăng độ chân thực, nghệ nhân đã sử dụng các chi tiết kim loại photo-etched (PE) siêu mỏng thay thế cho lan can nhựa nguyên bản dày cộm.

### Không đoàn trên boong tấp nập
Điểm quyến rũ nhất của mô hình này là dàn máy bay tiêm kích hạm tí hon được bố trí sống động trên boong:
- Tiêm kích tàng hình F-35C Lightning II cánh gập sành điệu.
- Tiêm kích đa năng F/A-18E/F Super Hornet ở vị trí chuẩn bị phóng.
- Máy bay cảnh báo sớm E-2D Advanced Hawkeye đang xếp cánh đỗ góc đuôi tàu.
Mỗi chiếc phi cơ tí hon chỉ dài khoảng 2cm nhưng được sơn vẽ hoa văn đuôi và khoang lái trong suốt vô cùng kỳ công dưới kính lúp độ phóng đại cao.`,
    publishedAt: "2026-06-28",
    viewCount: 18920,
    ranking: 1,
    tags: ["USS Gerald Ford", "Tàu sân bay", "F-35C", "Photo-Etched", "Mô hình hải quân"],
    pdfUrl: "/files/gerald-ford-1700.pdf",
    isFeatured: true,
    isNew: true
  },
  {
    id: "hq-2",
    title: "Tàu ngầm hạt nhân lớp Typhoon - Quái vật thép dưới đáy đại dương",
    slug: "tau-ngam-hat-nhan-lop-typhoon-quai-vat-dai-duong",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tìm hiểu thiết kế lớp tàu ngầm khổng lồ Project 941 Akula mang theo pháo đài tên lửa đạn đạo chiến lược uy phong sấm sét đe dọa mọi kẻ thù thời kỳ Chiến tranh Lạnh.",
    content: `Tàu ngầm hạt nhân lớp Typhoon (Project 941 Akula) của Liên Xô là lớp tàu ngầm lớn nhất từng được nhân loại chế tạo trong lịch sử. Với cấu trúc nhiều thân áp lực ghép song song bọc ngoài bằng lớp vỏ thép từ tính titan siêu bền, Typhoon như một pháo đài ngầm không thể phá hủy di chuyển dưới băng giá Bắc Cực hoang lạnh.

Mô hình tái hiện thân tàu bầu bĩnh đen bóng đặc trưng dìm mình một nửa dưới làn nước sâu thẳm. Lớp vỏ ngói giảm âm cao su đặc trưng được nghệ nhân mô phỏng bằng kỹ thuật dán băng keo tạo rãnh cắt vuông vắn đều tăm tắp, kết hợp hiệu ứng rỉ sét bám dọc các lỗ thoát nước đáy tàu vô cùng ấn tượng.`,
    publishedAt: "2026-05-25",
    viewCount: 14210,
    ranking: 2,
    tags: ["Tàu ngầm", "Typhoon", "Akula", "Liên Xô", "Hạt nhân chiến lược"],
    isFeatured: true,
    isNew: false
  },
  {
    id: "hq-3",
    title: "Kỹ thuật mô phỏng hiệu ứng sóng biển bằng keo Epoxy trong suốt dâng trào",
    slug: "ky-thuat-song-bien-keo-epoxy-trong-suot",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=600",
    excerpt: "Hướng dẫn chi tiết cách pha chế tỷ lệ keo epoxy resin chuyên dụng chống bọt khí, kỹ thuật tạo bọt sóng trắng dạt dào bằng bông sợi dán cọ mỏng.",
    content: `Đặt chiếc mô hình tàu chiến đơn độc lên mặt bàn gỗ phẳng sẽ làm giảm đi 90% vẻ đẹp của nó. Chế tác một bệ đỡ sa bàn đại dương cuộn sóng bằng keo Epoxy là giải pháp đỉnh cao để tôn vinh tác phẩm hải quân của bạn.

### Các bước pha chế Epoxy làm nước biển:
1. **Chuẩn bị khung đúc:** Làm hộp gỗ kín khít, bọc màng PE chống dính hoàn hảo xung quanh.
2. **Pha màu đại dương:** Trộn keo Epoxy resin loại chậm khô chuyên dụng với vài giọt mực cồn (alcohol ink) màu xanh dương đậm (Phthalo Blue) và một chút xanh ngọc lục bảo (Emerald Green) ở lớp đáy để tạo độ sâu.
3. **Đổ keo theo lớp:** Đổ từng lớp dày tối đa 1.5cm để tránh keo tỏa nhiệt quá mức tạo bong bóng khí dơ boong. Chờ đông rồi đổ tiếp lớp thứ hai.
4. **Tạo gợn sóng biển bằng cọ nhiệt:** Khi lớp keo trên cùng bắt đầu dẻo quánh như mật ong (khoảng 3 giờ sau khi pha), dùng máy sấy tóc thổi nhẹ tạo các nếp nhấp nhô tự nhiên của sóng biển đại dương dâng trào sủi tăm.`,
    publishedAt: "2026-04-18",
    viewCount: 11050,
    ranking: 3,
    tags: ["Epoxy Resin", "Nước biển giả", "Kỹ thuật sa bàn", "Sóng bọt biển"],
    isNew: false
  },
  {
    id: "hq-4",
    title: "Thiết giáp hạm Yamato: Biểu tượng hoàng hôn của kỷ nguyên pháo hạm",
    slug: "thiet-giap-ham-yamato-hoang-hon-phao-ham-khong-lo",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=600",
    excerpt: "Lịch sử và vinh quang bi tráng của pháo đài nổi Yamato thuộc Hải quân Hoàng gia Nhật Bản sở hữu dàn siêu pháo hạm 460mm vĩ đại nhất lịch sử hàng hải.",
    content: `Thiết giáp hạm Yamato là đỉnh cao của triết lý chiến tranh hải quân cổ điển 'Đại pháo cự hạm'. Sở hữu lượng giãn nước đầy tải lên tới 72.000 tấn và trang bị giáp bảo vệ dày dặn chưa từng có, Yamato sừng sững vượt trùng khơi như một ngọn núi sắt thép không thể lay chuyển giữa đại dương xanh thẳm.

Tuy nhiên, sự bùng nổ vũ bão của hàng không mẫu hạm cơ động tầm xa đã biến chiếc siêu hạm thành mục tiêu khổng lồ bất lực trước hàng trăm máy bay ném bom và ngư lôi từ bầu trời. Mô hình Tamiya tỉ lệ 1:350 tái hiện hoàn hảo cấu trúc boong tàu lát gỗ tuyết tùng xám thanh lịch cùng hàng chục tháp pháo cao xạ phòng không tua tủa kiêu hãnh bọc quanh đài chỉ huy cao vút.`,
    publishedAt: "2026-03-08",
    viewCount: 9800,
    ranking: 4,
    tags: ["Yamato", "Hải quân Nhật Bản", "Thiết giáp hạm", "Thế chiến II", "Tamiya 1:350"],
    isNew: false
  },
  {
    id: "hq-5",
    title: "Tàu tuần dương tên lửa lớp Slava và sức mạnh hạm đội hải quân Biển Đen",
    slug: "tau-tuan-duong-ten-lua-slava-suc-manh-bien-den",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
    excerpt: "Chiêm ngưỡng mô hình so sánh vũ khí phòng không S-300F Rif và bệ phóng tên lửa diệt hạm siêu thanh Sandbox xếp song song hai bên mạn sườn tuần dương hạm hầm hố.",
    content: `Tàu tuần dương tên lửa lớp Slava (Project 1164 Atlant) là hung thần diệt hạm sừng sững của Hải quân Liên Xô/Nga. Điểm nhận dạng không thể nhầm lẫn của Slava là 16 ống phóng hình trụ nghiêng khổng lồ chứa tên lửa hành trình chống hạm P-500 Bazalt/P-1000 Vulkan áp đảo hoàn toàn mọi hạm đội tấn công đường biển đối phương.

Mô hình Trumpeter tỉ lệ 1:350 lột tả xuất sắc cấu trúc thượng tầng phức tạp với hệ thống ra-đa vòm khổng lồ tựa như những chiếc nấm khổng lồ. Toàn bộ thân tàu được phủ màu sơn xám đỏ đặc trưng của hạm đội hải quân Nga trầm mặc tôn nghiêm đầy quyến rũ.`,
    publishedAt: "2026-04-05",
    viewCount: 8740,
    ranking: 5,
    tags: ["Slava", "Tuần dương hạm", "Diệt hạm", "Hải quân Nga"],
    isNew: false
  },
  {
    id: "hq-6",
    title: "Dự án tàu hộ vệ tàng hình tương lai - Pháo đài số thông minh trên biển cả",
    slug: "du-an-tau-ho-ve-tang-hinh-tuong-lai-phao-dai-so",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    excerpt: "Ý tưởng thiết kế mô hình tàu chiến tàng hình góc cạnh phẳng phiu như kim cương, tích hợp hệ thống buồng lái thực tế ảo và pháo ray điện từ hỏa lực siêu cấp.",
    content: `Tàu chiến tương lai năm 2040 sẽ có kết cấu thân vỏ góc cạnh tối giản tối đa để tán xạ sóng ra-đa trinh sát đối phương một cách triệt để nhất có thể. Không có lan can ngoài boong, không có dây anten nham nhở, toàn bộ thiết bị thu phát sóng được tích hợp trực tiếp vào cột buồm tháp nguyên khối kín kẽ.

Dự án mô hình concept này được hoàn thiện bằng công nghệ in 3D nhựa resin cứng cao cấp cho bề mặt phẳng hoàn hảo tuyệt đối không một gợn lỗi. Lớp sơn xám ánh xanh ngọc mờ giúp con tàu biến ảo màu sắc linh hoạt kỳ diệu tùy theo cường độ và góc chiếu của nguồn ánh sáng dọi vào tủ trưng bày trưng diện.`,
    publishedAt: "2026-07-05",
    viewCount: 7650,
    ranking: 6,
    tags: ["In 3D", "Tàu chiến tương lai", "Tàng hình", "Sci-Fi hạm"],
    isNew: true
  },
  {
    id: "hq-7",
    title: "Sa bàn trận hải chiến Midway lịch sử - Góc nhìn nghệ thuật 3D sinh động",
    slug: "sa-ban-tran-hai-chien-midway-lich-su",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=600",
    excerpt: "Cách tái hiện khoảnh khắc oanh tạc cơ SBD Dauntless bổ nhào thả bom trúng boong tàu sân bay Akagi bốc cháy ngùn ngụt ngập chìm trong tro tàn khói lửa sấm sét.",
    content: `Trận hải chiến Midway năm 1942 là bước ngoặt quyết định thay đổi hoàn toàn cục diện chiến tranh Thái Bình Dương thời Thế chiến II. Sa bàn tái hiện một góc tàu sân bay Akagi của hải quân Nhật đang nghiêng mình trốn chạy dưới cơn mưa bom tàn khốc từ những chú 'chim ưng sắt' Hoa Kỳ từ trên cao giáng xuống.

Hiệu ứng vụ nổ bong boong tàu được nghệ nhân chế tác từ bông gòn tẩm nhuộm màu đen của bồ hóng xen lẫn sợi quang dẫn sáng vàng đỏ nhấp nháy liên hoàn. Khói đen kịt bốc cao cuồn cuộn nghiêng ngả dạt dào mô phỏng lực gió biển khơi thổi dữ dội, tạo cảm giác bi hùng và căng thẳng đỉnh điểm kịch tính vô biên.`,
    publishedAt: "2026-05-10",
    viewCount: 6540,
    ranking: 7,
    tags: ["Midway", "Hải chiến", "Akagi", "SBD Dauntless", "Sa bàn hoành tráng"],
    isNew: false
  },
  {
    id: "hq-8",
    title: "Mô hình tàu khu trục lớp Arleigh Burke với chi tiết đồng thau nâng cấp",
    slug: "mo-hinh-tau-khu-truc-arleigh-burke-chi-tiet-dong-thau",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600",
    excerpt: "Nâng cấp hệ thống ra-đa quét mạng pha Aegis AN/SPY-1D và các bệ phóng thẳng đứng Mk41 bắn tên lửa hành trình bằng lá đồng photo-etched siêu mỏng mảnh mai.",
    content: `Tàu khu trục lớp Arleigh Burke là xương sống tác chiến của Hải quân Hoàng gia Hoa Kỳ, sở hữu lá chắn phòng thủ Aegis đỉnh cao. Mô hình của hãng HobbyBoss ở tỉ lệ 1:350 là một bộ kit tuyệt hảo nhưng để đạt độ trưng bày cao cấp, cần sử dụng gói chi tiết nâng cấp (Detail-Up Kit) bằng đồng đỏ uốn cong tỉ mỉ.

Các sợi cáp neo đậu mảnh như tơ nhện được luồn lách khéo léo qua các ròng rọc kim loại nhỏ li ti. Đuôi tàu còn có sàn đỗ bọc thép sáng láng dành riêng cho trực thăng săn ngầm SH-60B Seahawk được chế tác tinh vi, mở ra thế giới hải quân thu nhỏ rực rỡ chân thực ngay trên chiếc bàn làm việc của bạn.`,
    publishedAt: "2026-02-28",
    viewCount: 5980,
    ranking: 8,
    tags: ["Arleigh Burke", "Khu trục hạm", "Aegis", "Photo-Etched đồng"],
    isNew: false
  },
  {
    id: "hq-9",
    title: "Tàu đệm khí lớp Zubr - Quái thú đổ bộ khổng lồ của Hải quân Nga bờ biển",
    slug: "tau-dem-khi-zubr-quai-thu-do-bo-nga",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=600",
    excerpt: "Lắp ráp mô hình tàu đổ bộ đệm khí lớn nhất thế giới lớp Zubr nổi bật với ba cánh quạt đẩy khổng lồ phía đuôi và bệ phóng pháo phản lực Grad-M hầm hố hông tàu.",
    content: `Tàu đệm khí lớp Zubr (Project 1232.2) là phương tiện đổ bộ lướt sóng lớn nhất thế giới từng được chế tạo. Nó có khả năng chở theo 3 xe tăng chủ lực hạng nặng hoặc 10 xe thiết giáp cùng hàng trăm binh sĩ lao vút lên bờ biển đầy cát đá với vận tốc lên tới 55 hải lý/giờ vượt qua mọi chướng ngại vật mìn nước phòng ngự bờ biển dễ dàng.

Mô hình tái hiện phần váy đệm cao su bao quanh gầm tàu mềm mại được đúc bằng vật liệu dẻo cao cấp. Bộ ba động cơ quạt gió sừng sững phía đuôi có thể quay tự do mang lại trải nghiệm tương tác trực quan vô cùng thích thú cho người xem.`,
    publishedAt: "2026-03-12",
    viewCount: 5230,
    ranking: 9,
    tags: ["Zubr", "Tàu đệm khí", "Hải quân Nga", "Đổ bộ dã chiến"],
    isNew: false
  },
  {
    id: "hq-10",
    title: "Trải nghiệm chế tác mô hình gỗ tàu buồm cổ thế kỷ 18 đầy kỳ công quyến rũ",
    slug: "trai-nghiem-che-tac-mo-hinh-go-tau-buom-co",
    category: "Hải Quân",
    categorySlug: "hai-quan",
    coverImage: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600",
    excerpt: "Hành trình thắt từng nút dây buồm, mài dũa từng dải gỗ sồi xếp vỏ thân tàu buồm HMS Victory huyền thoại từ bản vẽ tay phục chế cổ của bảo tàng hoàng gia.",
    content: `Khác biệt hoàn toàn với mô hình nhựa đúc sẵn công nghiệp tiện lợi, mô hình tàu buồm gỗ cổ là lãnh địa nghệ thuật đầy tôn kính thách thức của những người thợ mộc tài ba kiên nhẫn. Dự án chế tác tàu chiến gỗ HMS Victory – soái hạm lừng lẫy của Đô đốc Nelson trong trận Trafalgar – là một hành trình thiền định tinh thần kéo dài hàng tháng trời ròng rã.

### Những thách thức cốt lõi:
- **Planking (Ghép nan vỏ tàu):** Phải hơ nóng hơi nước từng dải gỗ sồi mỏng mảnh, uốn lượn ôm khít sườn cong thân tàu mà không được làm gãy nứt dải gỗ.
- **Rigging (Đan hệ thống dây buồm):** Hơn 200 sợi dây dù với độ dày mỏng và màu sắc sẫm nhạt khác nhau được thắt nút tỉ mỉ qua hàng trăm ròng rọc gỗ nhỏ xíu có kích thước tương đương hạt đỗ để căng cánh buồm đón gió khơi xa.

Hương thơm dịu ngọt của gỗ tự nhiên hòa quyện mùi dầu bóng vecni cánh kiến tạo nên một tác phẩm nghệ thuật cổ điển quý phái sừng sững vượt thời gian trang trí sang trọng cho phòng khách biệt thự thượng lưu ấm cúng.`,
    publishedAt: "2026-01-15",
    viewCount: 4890,
    ranking: 10,
    tags: ["Tàu buồm gỗ", "HMS Victory", "Thủ công mỹ nghệ", "Rigging cổ điển"],
    isNew: false
  },

  // --- KHÔNG QUÂN (10 articles) ---
  {
    id: "kq-1",
    title: "Mô hình tiêm kích tàng hình thế hệ thứ năm Su-57 Felon tỷ lệ 1:48 tinh xảo",
    slug: "mo-hinh-tiem-kich-tang-hinh-su-57-felon-ti-le-1-48",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1519074069444-1ba4e6664104?auto=format&fit=crop&q=80&w=600",
    excerpt: "Đánh giá mẫu tiêm kích tàng hình chủ lực của Nga Su-57 Felon từ hãng Zvezda. Kỹ thuật sơn ngụy trang vân mây răng cưa 'Digital Camouflage' bằng khuôn tô stencil tự cắt thủ công.",
    content: `### Sứ mệnh thống trị bầu trời của Su-57 Felon
Su-57 Felon là máy bay tiêm kích phản lực tàng hình đa năng thế hệ thứ năm hiện đại nhất của Lực lượng Không quân Vũ trụ Nga. Thiết kế khí động học tích hợp độc đáo (vành mép trước cánh phụ, cánh lái đuôi xoay toàn phần) đem lại cho Felon khả năng siêu cơ động không tưởng để chiến thắng mọi cuộc không chiến cận chiến lẫn tầm xa.

### Bản kit Zvezda tỉ lệ 1:48 hoành tráng
Hộp mô hình tỷ lệ lớn này cho độ dài sải cánh lên tới hơn 30cm, đường lằn chìm (panel lines) cực sâu sắc nét ôm trọn thân vỏ bầu bĩnh tàng hình. Các cửa khoang chứa vũ khí ẩn giấu dưới bụng có thể tùy chọn lắp đặt ở trạng thái mở hé lộ dàn tên lửa tầm xa K-77M hiện đại đúc tinh xảo kèm theo cánh lái ổn định mỏng dính.

### Kỹ thuật cắt dán khuôn tô Stencil ngụy trang số
Vân ngụy trang răng cưa màu xám nhạt và xanh dương đậm đặc trưng của Su-57 là một thử thách khó nhằn. Quy trình sơn tỉ mỉ bao gồm:
1. Phun sơn lót xám mờ đồng đều.
2. Sơn màu xám bạc ánh kim nhạt cho toàn bộ thân vỏ nền.
3. Sử dụng băng keo che chắn chuyên dụng của hãng Tamiya, vẽ lưới ô vuông răng cưa kỹ thuật số rồi dùng dao mổ sắc lẹm cắt bỏ phần trống.
4. Dán khuôn keo vừa cắt lên mô hình tiêm kích, sau đó phun lớp sơn xanh xám thẫm thứ hai với áp suất cọ khí nhỏ 1.2 bar để tránh tràn viền ranh giới.
5. Gỡ bỏ băng keo bảo vệ nhẹ nhàng để lộ các đường ranh sắc lẹm như khắc laser công nghệ cao tuyệt mỹ.`,
    publishedAt: "2026-06-18",
    viewCount: 16890,
    ranking: 1,
    tags: ["Su-57 Felon", "Zvezda 1:48", "Digital Camouflage", "Airbrush", "Tiêm kích tàng hình"],
    pdfUrl: "/files/su57-guide.pdf",
    isFeatured: true,
    isNew: true
  },
  {
    id: "kq-2",
    title: "Huyền thoại tiêm kích F-14 Tomcat và đôi cánh cụp xòe huyền thoại nước Mỹ",
    slug: "huyen-thoai-tiem-kich-f-14-tomcat-canh-cup-xoe",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&q=80&w=600",
    excerpt: "Hành trình tái hiện tiêm kích hạm cánh cụp xòe lừng danh trong bộ phim bom tấn Top Gun kinh điển. Kỹ thuật mài mòn tạo mảng ố bẩn dầu thủy lực ở khe cánh sinh động.",
    content: `Grumman F-14 Tomcat là biểu tượng vĩnh cửu của không lực hải quân Mỹ suốt thời kỳ Chiến tranh Lạnh với đôi cánh cụp xòe thay đổi hình học linh hoạt độc đáo theo tốc độ bay. Phối hợp với radar tầm xa AWG-9 và siêu tên lửa diệt mục tiêu tầm siêu xa AIM-54 Phoenix khổng lồ, Tomcat từng là hung thần canh giữ bầu trời đại dương bao la.

Mô hình của hãng Tamiya ở tỷ lệ 1:48 được mệnh danh là bộ kit hoàn hảo nhất thế giới bởi độ khớp hoàn mỹ của các khớp nối. Nghệ nhân đã tập trung tạo điểm nhấn ở vùng gốc khe cánh – nơi tích tụ nhiều mảng dầu thủy lực và muội than đen bám bẩn khi đôi cánh cọ sát quét ra quét vào liên tục bằng phương pháp chấm vỗ cọ xốp khô chấm mực rửa chuyên dụng.`,
    publishedAt: "2026-05-30",
    viewCount: 13450,
    ranking: 2,
    tags: ["F-14 Tomcat", "Top Gun", "Tamiya", "Cánh cụp xòe", "Ố bẩn thủy lực"],
    isFeatured: true,
    isNew: false
  },
  {
    id: "kq-3",
    title: "Trực thăng tấn công AH-64D Apache Longbow: Kẻ săn tăng tàn khốc",
    slug: "truc-thang-ah-64d-apache-longbow-ke-san-tang",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600",
    excerpt: "Lắp ráp chiếc trực thăng vũ trang hạng nặng hầm hố của quân đội Mỹ nổi bật với đĩa radar Longbow tròn trịa sừng sững đỉnh cánh quạt chính uy lực.",
    content: `AH-64D Apache Longbow là mẫu trực thăng tấn công uy lực nhất của phương Tây hiện nay. Nó được thiết kế để luồn lách thấp dưới tán cây địa hình dốc núi, nhô đĩa radar Longbow ở chỏm cánh quạt lên để quét tìm và khóa hàng chục mục tiêu thiết giáp đối thủ trước khi phóng tên lửa AGM-114 Hellfire diệt gọn hàng loạt từ xa một cách vô cùng bất ngờ.

Bộ mô hình lắp ráp nổi tiếng với cụm buồng lái bọc thép hầm hố xếp dọc hai phi công trước sau. Toàn bộ khoang lái được trang bị màn hình hiển thị số siêu nhỏ chi tiết, các cửa sổ vòm bằng nhựa trong kính được đánh bóng mịn như gương bằng xi Cana cho phép quan sát rõ mồn một các phi công dũng cảm đang điều khiển chiếc trực thăng sừng sững đầy quyền năng.`,
    publishedAt: "2026-04-10",
    viewCount: 10240,
    ranking: 3,
    tags: ["Apache", "AH-64D", "Trực thăng vũ trang", "Hellfire", "Radar cánh quạt"],
    isNew: false
  },
  {
    id: "kq-4",
    title: "Máy bay ném bom chiến lược B-2 Spirit - Bóng ma tàng hình vô hình",
    slug: "may-bay-nem-bom-b-2-spirit-bong-ma-tang-hinh",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&q=80&w=600",
    excerpt: "Chiêm ngưỡng mô hình 'Cánh bay' (Flying Wing) siêu đắt đỏ trị giá 2 tỷ USD tái hiện bằng phiên bản mô hình đúc khối đen mờ huyền bí sang trọng sành điệu.",
    content: `B-2 Spirit là kỳ quan kỹ thuật quân sự đỉnh cao của nhân loại. Thiết kế độc đáo không có thân, không có đuôi lái đứng của B-2 giảm thiểu tối đa mọi diện tích phản xạ ra-đa, cho phép nó luồn sâu qua những lưới phòng không dày đặc nhất của đối phương để thực hiện những đòn oanh tạc chiến lược sấm sét hủy diệt mục tiêu mặt đất.

Mô hình tỉ lệ 1:72 sở hữu sải cánh khổng lồ rộng hơn 70cm chiếm trọn không gian phòng trưng bày. Để tạo độ sâu cho lớp sơn màu đen than mờ tẻ nhạt, nghệ nhân đã dùng cọ khí airbrush tỉ mỉ phun hiệu ứng đổ bóng tiền sắc độ (preshading) theo từng mảng ghép phẳng thân vỏ để mô tả kết cấu tấm sợi carbon hấp thụ sóng điện từ dẻo dai công nghệ cao vô song.`,
    publishedAt: "2026-03-22",
    viewCount: 9320,
    ranking: 4,
    tags: ["B-2 Spirit", "Cánh bay", "Mô hình khổng lồ", "Preshading", "Tàng hình Mỹ"],
    isNew: false
  },
  {
    id: "kq-5",
    title: "Kỹ thuật tạo hiệu ứng vệt khói dạt dào và lửa phụt động cơ tiêm kích phản lực",
    slug: "ky-thuat-tao-vet-khoi-va-lua-phut-dong-co-tiem-kich",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
    excerpt: "Cách cuộn bông gòn mềm mại bọc quanh bệ đỡ nhựa acrylic trong suốt kết hợp rải các dải đèn LED siêu nhỏ lập lòe mô phỏng luồng lửa đốt phụ tăng lực mạnh mẽ.",
    content: `Nhìn một chiếc mô hình tiêm kích đứng im trên càng đáp đôi lúc sẽ có cảm giác hơi đơn điệu tẻ nhạt. Dựng sa bàn ở tư thế cất cánh nghiêng mình vút bay cùng luồng khói lửa sau động cơ tăng lực (afterburner) rực sáng là một đỉnh cao trải nghiệm thị giác mới lạ mà bạn nên một lần thử nghiệm.

### Các vật liệu cần có:
- **Thanh nhựa Acrylic tròn:** Dùng làm trụ chịu lực cắm trực tiếp từ bệ đỡ vào miệng xả động cơ máy bay.
- **Bông gòn dính:** Sử dụng loại bông y tế hoặc bông nhồi gối mịn màng xốp.
- **Dây đèn LED nhấp nháy:** Sử dụng loại dây đồng LED siêu nhỏ dùng pin tiểu chạy dọc trong lõi thanh acrylic.
- **Sơn xịt acrylic màu cam, đỏ, xám:** Tạo lớp phủ sắc độ khói lửa tự nhiên dâng trào.

Chải xốp bông gòn cuốn chặt đều bọc xung quanh thanh acrylic trụ chịu lực, sau đó kéo xé nhẹ tay để tạo hiệu ứng khói sủi sọc dài cuốn cuộn. Phun lướt sơn xịt màu cam rực ở gốc, chuyển dần sang vàng chanh rồi xám muội than ở cuối vệt khói. Khi bật công tắc LED, toàn bộ luồng khói sẽ rực cháy lung linh huyền ảo như đang bay với tốc độ âm thanh vang dội bầu trời hoành tráng vô biên.`,
    publishedAt: "2026-05-15",
    viewCount: 8900,
    ranking: 5,
    tags: ["Afterburner", "Đèn LED trang trí", "Khói giả", "Tiêm kích vút bay"],
    isNew: false
  },
  {
    id: "kq-6",
    title: "Tiêm kích cánh ngược Su-47 Berkut - Giấc mơ hàng không viễn tưởng Nga",
    slug: "tiem-kich-canh-nguoc-su-47-berkut-giac-mo-hang-khong",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tìm hiểu mẫu tiêm kích thử nghiệm cánh ngược Su-47 Berkut (Đại bàng vàng) huyền thoại thu hút mọi ánh nhìn bởi đôi cánh nghiêng ngược cực dị lôi cuốn.",
    content: `Sukhoi Su-47 Berkut là một kiệt tác thử nghiệm hàng không quân sự độc đáo của Nga thời kỳ cuối thập niên 1990. Đôi cánh xuôi về phía trước (cánh ngược) mang lại lực nâng cực đại phi thường ở dải tốc độ thấp và hành trình cơ động xoay hướng ngoạn mục không tưởng mà cánh xuôi sau truyền thống khó lòng làm được.

Mặc dù không được đưa vào sản xuất thương mại hàng loạt do giới hạn vật liệu kết cấu dẻo dính chịu lực thời bấy giờ, Su-47 vẫn luôn là một nguồn cảm hứng vô tận cho các nghệ nhân mô hình Sci-Fi. Lớp sơn màu đen tuyền bóng mượt phối cùng viền vàng cát vàng đồng quanh mép hút khí tạo cho Berkut một diện mạo đầy bí hiểm, tựa như một phi thuyền ngoài hành tinh lướt gió.`,
    publishedAt: "2026-03-01",
    viewCount: 7800,
    ranking: 6,
    tags: ["Su-47 Berkut", "Cánh ngược", "Không quân Nga", "Thử nghiệm công nghệ"],
    isNew: false
  },
  {
    id: "kq-7",
    title: "Sa bàn phi trường không quân dã chiến thời kỳ Chiến tranh Lạnh u buồn",
    slug: "sa-ban-phi-truong-khong-quan-da-chien-chien-tranh-lanh",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    excerpt: "Chế tác bệ đỗ máy bay bằng bê tông đúc nứt nẻ lấm lem rêu phong mọc hoang dại, xe thang bảo dưỡng kỹ thuật rỉ sét cùng phi công mặc bộ đồ bay cổ điển sành điệu.",
    content: `Sa bàn phi trường mô tả bối cảnh trực chiến căng thẳng của lực lượng không quân tiêm kích phòng thủ giữa những năm 1970 hoang lạnh u buồn. Chiếc tiêm kích MiG-21MF đậu sừng sững trên bệ bê tông nứt nẻ lấm lem rêu phong mọc bám ở các khe hở ron xi măng.

Để làm được điều này, nghệ nhân đã cắt các tấm thạch cao phẳng vuông vắn xếp sát nhau, đục khoét bẻ gãy các góc tạo vết nứt vỡ tự nhiên của thời gian bào mòn bê tông dã chiến. Rêu mọc dại hoang dã được rải từ các loại bột cỏ tĩnh điện (static grass) màu xanh rêu sẫm pha nâu phong sương cực kỳ ấn tượng sinh động lôi cuốn.`,
    publishedAt: "2026-04-20",
    viewCount: 6510,
    ranking: 7,
    tags: ["Bê tông nứt", "MiG-21", "Chiến tranh Lạnh", "Bột cỏ tĩnh điện", "Sa bàn sân bay"],
    isNew: false
  },
  {
    id: "kq-8",
    title: "Mô hình tiêm kích đa năng Rafale-C của Không quân Pháp tinh xảo lộng lẫy",
    slug: "mo-hinh-tiem-kich-rafale-c-khong-quan-phap",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=600",
    excerpt: "Lắp ráp dòng tiêm kích cánh tam giác tích hợp cánh mũi (Canard) kiêu kỳ trứ danh từ hãng Dassault Aviation mang màu sơn xám biển cả dịu dàng lãng mạn.",
    content: `Dassault Rafale là niềm kiêu hãnh của công nghiệp quốc phòng độc lập của Pháp, dòng tiêm kích đa nhiệm 'Omnirole' có thể gánh vác mọi nhiệm vụ từ trinh sát, không chiến đến răn đe hạt nhân chiến thuật.

Mô hình tỉ lệ 1:72 của hãng Revell tái hiện trọn vẹn vẻ kiêu sa quyến rũ của đôi cánh tam giác mượt mà nối liền cánh mũi nhỏ canard linh hoạt phía trước mũi. Nghệ nhân đã cực kỳ thành công trong khâu sơn chuyển màu xám nhạt bóng mờ dải viền mỏng manh, tạo cảm giác như lớp kim loại đang phản chiếu ánh sáng hoàng hôn mờ ảo của bầu trời Paris xinh đẹp lộng lẫy cực kỳ quý phái sang trọng.`,
    publishedAt: "2026-02-10",
    viewCount: 5980,
    ranking: 8,
    tags: ["Rafale-C", "Pháp", "Cánh tam giác", "Revell 1:72", "Sơn xám biển"],
    isNew: false
  },
  {
    id: "kq-9",
    title: "Máy bay không người lái RQ-4 Global Hawk - Mắt thần trinh sát tầm cao",
    slug: "may-bay-khong-nguoi-lai-rq-4-global-hawk-mat-than",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1580413508825-039017faebc3?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tìm hiểu mẫu UAV giám sát chiến lược tầm xa với sải cánh cực lớn dài ngoằng tựa cánh chim hải âu lướt nhẹ giữa tầng bình lưu lạnh lẽo mây mù.",
    content: `UAV RQ-4 Global Hawk là hệ thống giám sát chiến lược tối tân, bay liên tục suốt hơn 30 giờ ở độ cao trên 18.000 mét để thu thập hình ảnh và dữ liệu vô tuyến trinh sát chi tiết từng mét vuông mặt đất dải biên thùy xa xôi bất kể ngày đêm giông bão.

Mô hình tái hiện thân máy bay phình to ngộ nghĩnh chứa ăng-ten vệ tinh ra-đa mảng pha khổng lồ cùng sải cánh mỏng dính dài vút cong vút nhẹ nhàng. Toàn thân sơn màu trắng ngà mịn màng tạo độ tương phản nghệ thuật cực cao khi phối cạnh các sa bàn mặt đất xám ngắt khô cằn sỏi đá dã chiến hẻo lánh.`,
    publishedAt: "2026-01-28",
    viewCount: 5120,
    ranking: 9,
    tags: ["Global Hawk", "UAV", "Trinh sát tầm cao", "Sải cánh dài", "Trắng ngà"],
    isNew: false
  },
  {
    id: "kq-10",
    title: "Tiêm kích F-22 Raptor và kỹ thuật mô phỏng lớp sơn phủ tàng hình Metallic",
    slug: "tiem-kich-f-22-raptor-ky-thuat-son-phu-tang-hinh-metallic",
    category: "Không Quân",
    categorySlug: "khong-quan",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    excerpt: "Bí quyết pha tẩm bột nhũ bạc sương khói vào sơn mờ xám của hãng Hasegawa để tái tạo hiệu ứng bóng bẩy đổi màu phản xạ sóng radar siêu đặc biệt dưới ánh nắng mặt trời.",
    content: `F-22 Raptor là đỉnh cao của không lực Hoa Kỳ, ông vua thống trị bầu trời không đối thủ nhờ khả năng siêu tuần tiễu và tàng hình tuyệt đối. Điểm đặc trưng lôi cuốn của Raptor ngoài đời thực là lớp sơn phủ có khả năng hấp thụ phản xạ ánh sáng mờ bóng ánh kim (metallic sheen) nhẹ nhàng biến đổi sắc độ kỳ ảo tùy thuộc góc nhìn của nắng rọi.

Để mô phỏng hiệu ứng ma mị quý giá này trên mô hình nhựa Hasegawa tỉ lệ 1:48, nghệ nhân đã chia sẻ bí quyết độc quyền:
- Trộn sơn màu xám nhạt mờ Gunze với 5% bột nhũ bạc kim loại siêu mịn của hãng Alclad.
- Phun thật loãng với áp suất cao và khoảng cách cọ khí xa 25cm tạo lớp sương khô mỏng nhẹ bám đều.
- Phủ một lớp sơn bóng mờ bán phần (Semi-Gloss Clear) cuối cùng để khóa hạt nhũ bạc sáng bóng lấp lánh nhẹ dịu nghệ thuật dưới mọi góc dọi đèn vô cùng cuốn hút kiêu sa.`,
    publishedAt: "2026-01-05",
    viewCount: 4670,
    ranking: 10,
    tags: ["F-22 Raptor", "Hasegawa", "Alclad", "Sơn Metallic Sheen", "Tàng hình Mỹ"],
    isNew: false
  },

  // --- KHÁC (10 articles) ---
  {
    id: "kh-1",
    title: "Mô hình chiến giáp Mech Gundam RX-78-2 phong cách quân sự phong sương",
    slug: "mo-hinh-mech-gundam-rx-78-2-phong-cach-quan-su-phong-suong",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?auto=format&fit=crop&q=80&w=600",
    excerpt: "Sáng tạo độc đáo biến robot Gundam đồ chơi rực rỡ sắc màu nguyên bản thành một chiến binh cơ giáp dạn dày sương gió bão cát chiến trường dã chiến rỉ sét gai góc.",
    content: `### Mech Gundam RX-78-2 phong cách quân sự thực tế (Military Real Type)
Nguyên bản dòng Gundam RX-78-2 sở hữu ba màu chủ đạo rực rỡ trắng, xanh dương và đỏ đậm có phần hơi mang tính đồ chơi trẻ em màu mè. Với dự án sáng tạo nghệ thuật này, nghệ nhân Phi Long Studio đã lột xác hoàn toàn chú robot thành một chiến binh cơ giáp thực thụ, dạn dày phong sương bụi cát viễn tưởng như bước ra từ những trang sử chiến tranh tương lai khốc liệt.

### Các công đoạn độ chế và sơn ráp hầm hố
1. **Sửa đổi diện mạo (Kit-Bashing):** Khoét thêm các vết lõm nứt vỡ do đạn pháo bắn trúng bằng đầu hàn điện nóng chảy trên khiên chắn và giáp vai. Gắn thêm các tấm bọc thép dã chiến chế tác từ nhựa styrene phẳng dán keo cyanoacrylate cứng cáp.
2. **Sơn ngụy trang quân sự sẫm trầm:** Sử dụng dải màu lục quân phong sương gồm xanh rêu sẫm phối xám niken ánh kim và vàng thau thô ráp, triệt tiêu hoàn toàn các tông màu sặc sỡ đồ chơi ban đầu.
3. **Hiệu ứng phong sương tột cùng (Heavy Weathering):** Sử dụng bút vẽ nét nhỏ tỉ mỉ tô từng vết bong sơn nứt nẻ màu bạc bóng ở mép khớp nối hoạt động mạnh. Chấm dầu đen rửa toàn thân tạo vết rỉ dầu nhớt rò rỉ dọc từ bả vai và gối gót chân vô cùng sinh động.

Tác phẩm sau khi hoàn thiện sừng sững uy phong lẫm liệt tựa như một cỗ máy chiến tranh khổng lồ bọc thép hàng ngàn tấn nặng nề tàn phá trận địa, mang đến một định nghĩa hoàn toàn mới đầy mê hoặc cho thế giới Gunpla truyền thống.`,
    publishedAt: "2026-07-08",
    viewCount: 17540,
    ranking: 1,
    tags: ["Gundam RX-78", "Gunpla Real Type", "Kit-bashing", "Heavy Weathering", "Cơ giáp viễn tưởng"],
    pdfUrl: "/files/gundam-realtype.pdf",
    isFeatured: true,
    isNew: true
  },
  {
    id: "kh-2",
    title: "Trạm vũ trụ tương lai 'Cổng Trời' - Bản vẽ và mô hình kiến trúc không gian",
    slug: "tram-vu-tru-tuong-lai-cong-troi-kien-truc-khong-gian",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600",
    excerpt: "Khám phá dự án mô hình trạm vũ trụ dạng vòng tròn ly tâm tạo trọng lực nhân tạo khổng lồ sừng sững lơ lửng ngoài quỹ đạo Trái Đất xanh thẳm lung linh.",
    content: `Trạm vũ trụ 'Cổng Trời' (Heavenly Gate Space Station) là một tầm nhìn lãng mạn về nơi trung chuyển tàu không gian giữa Trái Đất và các thuộc địa xa xôi trên Sao Hỏa thế kỷ 22. Kết cấu vòng tròn quay ly tâm khổng lồ đường kính 2km liên tục vận hành tạo ra gia tốc trọng lực tương đương địa cầu giúp con người sinh sống ổn định dài lâu không bị loãng xương.

Mô hình kiến trúc tương lai này được chế tác từ sự kết hợp của in 3D nhựa dẻo trong suốt và các dải đèn sợi quang cực mịn lách dọc các khoang mô-đun sinh sống. Khi lên đèn trong studio tối, trạm không gian tỏa sáng lung linh rực rỡ như một chiếc vương miện kim cương sành điệu lơ lửng giữa khoảng không vũ trụ sâu thẳm vô biên u tịch.`,
    publishedAt: "2026-06-25",
    viewCount: 13980,
    ranking: 2,
    tags: ["Trạm vũ trụ", "Kiến trúc không gian", "Đèn sợi quang", "Trọng lực nhân tạo"],
    isFeatured: true,
    isNew: false
  },
  {
    id: "kh-3",
    title: "Pháo đài bay viễn tưởng 'Chinh Phục' - Siêu hạm sa bàn không gian tương lai",
    slug: "phao-dai-bay-vien-tuong-chinh-phuc-sieu-ham-khong-gian",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600",
    excerpt: "Sáng tạo mô hình soái hạm không gian dài hơn 1 mét trang bị bệ phóng động cơ hạt nhân đẩy ion phản vật chất phát ra ánh xanh huỳnh quang ma mị sâu thẳm.",
    content: `Soái hạm chiến lược 'Chinh Phục' (Conqueror) là biểu tượng quyền lực tuyệt đối của lực lượng tuần duyên thiên hà tương lai. Sở hữu dàn siêu pháo năng lượng plasma dọc sống lưng hạm và khoang phóng chứa hàng trăm tiêm kích đánh chặn nhỏ bé.

Nghệ nhân Phi Long Studio đã dày công tự tay điêu khắc từng mảng thân tàu từ xốp XPS mật độ cao, phủ thạch cao mài mịn bọc ngoài tấm nhựa mỏng styrene tạo nên kết cấu bền vững hoành tráng. Miệng xả động cơ hạt nhân được độ chế bệ tản nhiệt từ linh kiện máy tính cũ kết hợp hệ thống đèn LED cực mạnh đổi màu RGB tạo hiệu ứng đẩy phản vật chất chân thực tuyệt đỉnh vô cùng hầm hố lôi cuốn.`,
    publishedAt: "2026-05-12",
    viewCount: 11020,
    ranking: 3,
    tags: ["Soái hạm không gian", "Xốp XPS", "LED RGB", "Sci-Fi pháo đài"],
    isNew: false
  },
  {
    id: "kh-4",
    title: "Xe tăng hai nòng cơ động Apocalypse trong vũ trụ trò chơi chiến thuật cổ điển",
    slug: "xe-tang-hai-nong-apocalypse-command-and-conquer",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tái hiện cỗ xe tăng hủy diệt huyền thoại Apocalypse khổng lồ trang bị xích kéo gai thép nhọn gầm thét tàn phá sa mạc game rực lửa Red Alert 2 xưa cũ.",
    content: `Chiếc xe tăng Apocalypse hai nòng phun lửa với tháp pháo vuông vức gai góc luôn là cơn ác mộng bọc thép và là niềm đam mê cuồng nhiệt của thế hệ game thủ 8x-9x trong tựa game chiến thuật Red Alert 2 kinh điển.

Mô hình 3D tự thiết kế tỉ mỉ tái hiện bộ xích kép đôi hầm hố kéo dài suốt thân xe bậm trợn sừng sững, phía trước gắn bộ lưỡi cày ủi chướng ngại vật sắc lẹm được bọc màu sơn kim loại xám gỉ sét hoang tàn dã chiến. Hai nòng pháo cỡ nòng lớn được tiện đúc từ nhôm đặc nguyên khối cho vẻ lạnh lùng đanh thép chân thực vô cùng dũng mãnh đe dọa mọi kẻ thù.`,
    publishedAt: "2026-04-30",
    viewCount: 9780,
    ranking: 4,
    tags: ["Apocalypse", "Red Alert 2", "Xe tăng hai nòng", "Thân nhôm tiện"],
    isNew: false
  },
  {
    id: "kh-5",
    title: "Mô hình tàu vũ trụ vận tải tàng hình 'Tinh Vân' - Tỷ lệ 1:144 tinh sảo sành điệu",
    slug: "mo-hinh-tau-vu-tru-van-tai-tinh-van-ti-le-1-144",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600",
    excerpt: "Chế tác chiếc phi thuyền vận chuyển hàng lậu bóng bẩy đen ngọc trai lướt êm dịu vượt qua hệ thống vòng đai tiểu hành tinh bụi bặm che phủ đầy kịch tính.",
    content: `Tàu vận tải tàng hình 'Tinh Vân' (Nebula Cargo) được thiết kế đặc thù cho các phi vụ vận chuyển hàng nhạy cảm vượt biên giới thiên hà bất hợp pháp. Kết cấu thân dẹt phẳng thuôn dài bóng bẩy như da cá voi xanh giúp nó ẩn mình hoàn hảo lẩn trốn ra-đa tuần tiễu của cảnh sát vũ trụ.

Để sơn được lớp màu đen ngọc trai (Chameleon Pearl Black) chuyển màu diệu kỳ từ tím than sang xanh lục bảo lung linh tùy theo góc nhìn phản xạ ánh sáng, nghệ nhân đã phủ lót lớp đen bóng piano siêu mịn dán màng, sau đó phun lớp sơn đổi màu ngọc trai đắt đỏ của Nhật Bản mỏng tang khóa bóng rực rỡ lộng lẫy vô song sang trọng quý phái tuyệt đỉnh trưng diện trang trọng.`,
    publishedAt: "2026-03-18",
    viewCount: 8900,
    ranking: 5,
    tags: ["Tàu vũ trụ", "Sơn chuyển màu Pearl", "Chameleon", "Sci-Fi phi thuyền"],
    isNew: false
  },
  {
    id: "kh-6",
    title: "Kỹ thuật độ đèn LED cực ngầu phát sáng nhấp nháy cho các mô hình viễn tưởng",
    slug: "ky-thuat-do-den-led-mo-hinh-vien-tuong",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    excerpt: "Cẩm nang hướng dẫn đấu nối vi mạch bán dẫn siêu nhỏ Arduino, cách giấu dây đồng mỏng như tóc xuyên qua các khớp chân tay gối chuyển động linh hoạt.",
    content: `Đèn LED trang trí phát sáng là linh hồn mang lại sức sống và vẻ lung linh cho các mô hình viễn tưởng Sci-Fi hay cơ giáp Gundam robot. Thay vì dùng dây điện dày rườm rà thô kệch mất thẩm mỹ, bài viết này hướng dẫn phương pháp đi dây chuyên nghiệp:

### Quy trình kỹ thuật:
- **Dây đồng tráng men cách điện (Enameled Copper Wire):** Loại dây mỏng mảnh như sợi tóc có lớp men cách điện cực mỏng, cho phép luồn lách dễ dàng xuyên qua các lỗ khoan rỗng siêu nhỏ dọc trong lòng các khớp khuỷu tay khuỷu chân nhựa mà không cản trở biên độ cử động hoạt động của khớp.
- **Vi mạch điều khiển Arduino Nano:** Lập trình nhấp nháy dạt dào nhẹ nhàng (breathing effect) mô phỏng nhịp tim năng lượng của lõi năng lượng lò phản ứng hạt nhân ngực robot, đem lại hồn sống động thần kỳ cho mô hình vô tri vô giác rực rỡ sáng trong bóng đêm huyền ảo ma mị quyến rũ tuyệt trần.`,
    publishedAt: "2026-05-05",
    viewCount: 7890,
    ranking: 6,
    tags: ["Arduino", "Dây đồng tráng men", "Độ LED gundam", "Vi mạch siêu nhỏ"],
    isNew: false
  },
  {
    id: "kh-7",
    title: "Chiến binh bọc thép Warhammer 40k Space Marine - Kỹ thuật sơn màu ánh kim",
    slug: "chien-binh-warhammer-40k-space-marine-son-anh-kim",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tìm hiểu nghệ thuật sơn mô hình thu nhỏ nhân vật cờ bàn Warhammer 40k mang trên mình bộ giáp vàng cổ điển sần sùi dạn dày chinh chiến dũng mãnh.",
    content: `Thế giới tăm tối viễn tưởng của Warhammer 40,000 chứa đựng những trận chiến tàn khốc vĩ đại vô tiền khoáng hậu nơi những chiến binh thánh chiến Space Marine khoác lên mình những bộ giáp bọc thép cường lực khổng lồ sừng sững gánh vác sứ mệnh cứu rỗi nhân loại cuối cùng.

Bức tượng nhỏ chỉ vỏn vẹn 4cm nhưng được nghệ nhân thổi hồn sừng sững oai phong dũng mãnh nhờ kỹ thuật sơn màu ánh kim loại thô ráp (Non-Metallic Metal - NMM) đỉnh cao. Toàn bộ hiệu ứng phản xạ lấp lánh của ánh sáng đồng thau trên mép giáp vai được vẽ thủ công bằng cọ mảnh lông chồn từng lớp ranh màu siêu mỏng mịn chuyển sắc độ vô cùng tinh tế nghệ thuật quý phái.`,
    publishedAt: "2026-02-20",
    viewCount: 6980,
    ranking: 7,
    tags: ["Warhammer 40k", "Space Marine", "Sơn NMM thủ công", "Tượng mini để bàn"],
    isNew: false
  },
  {
    id: "kh-8",
    title: "Pháo pháo đài bánh xích di động khổng lồ trên sa mạc - Ý tưởng độc bản",
    slug: "phao-dai-banh-xich-di-dong-sa-mac-y-tuong-doc-ban",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=600",
    excerpt: "Sáng tạo sa bàn pháo đài thép di động bánh xích lăn lê chậm chạp băng qua biển cát vàng mênh mông bão táp bụi phủ ngột ngạt lôi cuốn kỳ vĩ.",
    content: `Dự án sa bàn quy mô lớn mang tên 'Thợ Canh Sa Mạc' (Desert Sentinel) mô tả một pháo đài cơ khí bánh xích khổng lồ có quy mô như một thành phố thu nhỏ lầm lũi hành tiến chậm chạp giữa bão cát sa mạc gầm rú dữ dội hoang vu cô tịch.

Kết cấu bánh xích khổng lồ rỉ sét loang lổ sần sùi bám chặt các lớp cát vàng vụn mịn. Nghệ nhân đã tinh tế sử dụng cát sa mạc thật rây mịn sấy khô rắc dán tỉ mỉ lên các góc khuất khe kẽ thân pháo đài tạo hiệu ứng gió bão thổi bám cát tự nhiên hoàn hảo đầy kỳ vĩ và lôi cuốn ngột ngạt nghệ thuật thị giác kiệt tác trưng diện.`,
    publishedAt: "2026-04-15",
    viewCount: 5910,
    ranking: 8,
    tags: ["Pháo đài di động", "Sa mạc bão cát", "Bánh xích cổ rỉ", "XPS điêu khắc"],
    isNew: false
  },
  {
    id: "kh-9",
    title: "Thiết giáp hạm không gian Space Battleship Yamato 2199 - Tuyệt tác hồi sinh",
    slug: "thiet-giap-ham-khong-gian-yamato-2199-tuyet-tac",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1577978390261-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600",
    excerpt: "Độ bệ xả động cơ phản lực Wave Motion Engine phát sáng xanh huyền diệu và họng pháo Wave Motion Gun đầu mũi tàu lừng lẫy rực rỡ lôi cuốn.",
    content: `Space Battleship Yamato 2199 là bộ anime khoa học viễn tưởng hồi sinh dòng phim chiến hạm vũ trụ huyền thoại của Nhật Bản. Con tàu được phục dựng từ xác thiết giáp hạm Yamato đắm chìm đáy biển sâu năm xưa, trang bị lò phản ứng Wave Motion siêu việt bay vút lên bầu trời cứu rỗi Trái Đất thoát khỏi sự diệt vong bởi đế quốc Gamilas hung tàn độc địa.

Mô hình lắp ráp của hãng Bandai sở hữu độ chi tiết sắc sảo chuẩn mực hoàn mỹ tuyệt đối. Nghệ nhân tại Phi Long Studio đã dày công độ thêm bệ đèn LED siêu sáng màu xanh ngọc lam dịu mát ở khoang xả khí đuôi tàu mô phỏng sức đẩy phản lực ion dạt dào vĩ đại dũng mãnh, tạo nên một kiệt tác trưng bày độc nhất vô nhị lộng lẫy cực kỳ thu hút mọi ánh nhìn thán phục.`,
    publishedAt: "2026-03-05",
    viewCount: 5420,
    ranking: 9,
    tags: ["Space Battleship", "Yamato 2199", "Bandai Sci-Fi", "Wave Motion Engine", "LED xanh ngọc"],
    isNew: false
  },
  {
    id: "kh-10",
    title: "Mô hình bộ giáp cơ khí Exo-Suit dùng cho công binh tiền tuyến tương lai hầm hố",
    slug: "mo-hinh-bo-giap-exo-suit-cong-binh-tuong-lai",
    category: "Khác",
    categorySlug: "khac",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
    excerpt: "Lắp ráp bộ khung xương ngoài lực lượng cơ giới hỗ trợ khuân vác đạn dược vật nặng quân sự hạng nặng trong các bến cảng quân sự tương lai sầm uất.",
    content: `Khung xương ngoài cơ khí Exo-Suit là trang bị không thể thiếu cho công binh lục quân tương lai để khuân vác, sửa chữa khí tài hạng nặng trong điều kiện dã chiến khắc nghiệt thiếu thốn trang thiết bị cẩu nâng cơ giới cồng kềnh.

Bộ mô hình tỉ lệ 1:20 của hãng Wave Nhật Bản mô tả chân thực cấu trúc pít-tông lực nén dầy đặc uốn quanh đùi vai bệ khớp của người lính. Từng đường ống dẫn dầu thủy lực dẻo dai bằng cao su đen được uốn nối uốn cong tinh vi chân thực, mang màu sơn vàng đen cảnh báo nguy hiểm sọc vằn bắt mắt dũng mãnh nổi bật sành điệu hầm hố.`,
    publishedAt: "2026-01-10",
    viewCount: 4780,
    ranking: 10,
    tags: ["Exo-Suit", "Khung xương ngoài", "Wave Japan", "Màu sơn cảnh báo", "Cơ khí thủy lực"],
    isNew: false
  }
];
