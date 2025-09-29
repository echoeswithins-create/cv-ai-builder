import React, { useState } from "react";
import "./../styles/builder.css";

const templates = [
  { name: "Modern", desc: "Temiz ve modern tasarım", premium: false },
  { name: "Klasik", desc: "Geleneksel ve profesyonel", premium: false },
  { name: "Kreatif", desc: "Yaratıcı ve renkli tasarım", premium: true },
  { name: "Minimal", desc: "Sade ve şık", premium: true },
  { name: "Profesyonel", desc: "İş dünyasına özel", premium: true },
  { name: "Executive", desc: "Üst düzey pozisyonlar", premium: true },
];

const tabs = ["Kişisel", "Deneyim", "Eğitim", "Beceriler"];

const BuilderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Kişisel");
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="builder-container">
      {/* Sol Panel */}
      <div className="left-panel">
        {/* Şablon Seçici */}
        <div className="template-selector">
          <h3>CV Şablonu Seçin</h3>
          <p>CV’nizin görünümünü belirleyen şablonu seçin</p>
          <div className="template-grid">
            {templates.map((tpl) => (
              <div
                key={tpl.name}
                className={`template-card ${tpl.premium ? "premium" : ""}`}
              >
                <h4>{tpl.name}</h4>
                <p>{tpl.desc}</p>
                {tpl.premium && <span className="badge">⭐ Premium</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Form Alanları */}
        <div className="form-section">
          <div className="tab-nav">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="form-fields">
            {activeTab === "Kişisel" && (
              <>
                <input type="text" name="adSoyad" placeholder="Ad Soyad" onChange={handleChange} />
                <input type="email" name="email" placeholder="E-posta" onChange={handleChange} />
                <input type="text" name="telefon" placeholder="Telefon" onChange={handleChange} />
                <input type="text" name="adres" placeholder="Adres" onChange={handleChange} />
                <textarea name="ozet" placeholder="Kendinizi kısaca tanıtın" onChange={handleChange} />
              </>
            )}
            {activeTab === "Deneyim" && (
              <textarea name="deneyim" placeholder="İş deneyimlerinizi yazın" onChange={handleChange} />
            )}
            {activeTab === "Eğitim" && (
              <textarea name="egitim" placeholder="Eğitim bilgilerinizi yazın" onChange={handleChange} />
            )}
            {activeTab === "Beceriler" && (
              <textarea name="beceriler" placeholder="Becerilerinizi listeleyin" onChange={handleChange} />
            )}
          </div>
        </div>
      </div>

      {/* Sağ Panel */}
      <div className="right-panel">
        <h3>CV Önizleme</h3>
        <div className="preview-box">
          {Object.keys(formData).length === 0 ? (
            <p>Sol panelden bilgilerinizi girin, burada CV’nizi önizleyin 👈</p>
          ) : (
            <div>
              <h2>{formData.adSoyad || "Ad Soyad"}</h2>
              <p>{formData.email || "ornek@email.com"} | {formData.telefon || "Telefon"}</p>
              <p>{formData.adres || "Adres"}</p>
              <h4>Özet</h4>
              <p>{formData.ozet || "Kendinizi tanıtın..."}</p>

              {formData.deneyim && (<><h4>Deneyim</h4><p>{formData.deneyim}</p></>)}
              {formData.egitim && (<><h4>Eğitim</h4><p>{formData.egitim}</p></>)}
              {formData.beceriler && (<><h4>Beceriler</h4><p>{formData.beceriler}</p></>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
