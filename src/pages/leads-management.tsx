import Button from "@/components/button/button.component";
import Modal from "@/components/modal/modal.component";
import Table from "@/components/table/table.component";
import { statuses } from "@/constants/table.constants";
import { ILead } from "@/interfaces/types";
import { RootState } from "@/store/store";
import { UserProfile } from "@/styles/home-page.styles";
import { LeadDetails, LeadManagementPageContainer, LeadsManagementContent, LeadsManagementSidebar } from "@/styles/lead-management-page.styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLead } from "@/store/slices/leadsSlice";

const routes = [
  'leads',
  'settings',
]

export default function LeadManagement() {
  const t = useTranslations();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const [selectedLead, setSelectedLead] = useState<ILead | null>(null);

  const isCurrentRoute = (route: string) => {
    return window.location.pathname.includes(route.toLowerCase());
  };

  const handleGoBack = () => {
    router.push('/');
  }

  if (!user) {
    router.push('/');
    return null;
  }

  const handleViewLead = (lead: ILead) => {
    setSelectedLead(lead);
  };

  const handleEditLead = () => {
    if (selectedLead) {
      dispatch(updateLead(selectedLead));
      setSelectedLead(null);
    }
  }

  return (
    <LeadManagementPageContainer>
      <LeadsManagementSidebar>
        <div className="top">
          <div className="logo">alma</div>
          <div className="menu">
            <ul>
              {routes.map((route) => (
                <li key={route} className={isCurrentRoute(route) ? 'selected' : ''}>
                  {t('routes.' + route)}
                </li>
              ))}

              <li onClick={handleGoBack}>
                {t('home.back')}
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <UserProfile>
            {user?.name.split("")[0]}
          </UserProfile>
          <span>
            {user?.name}
          </span>
        </div>

      </LeadsManagementSidebar>

      <LeadsManagementContent>
        <div className="title">{t('leads.title')}</div>
        <Table onButtonClick={handleViewLead} />
      </LeadsManagementContent>

      {
        selectedLead && <Modal onClose={() => setSelectedLead(null)}>
          <LeadDetails>
            <h2><strong>{t('leads.name')}:</strong> {selectedLead.name} {selectedLead.surname}</h2>
            <p><strong>{t('leads.email')}:</strong> {selectedLead.email}</p>
            <p><strong>{t('leads.submitted')}:</strong> {selectedLead.submitted}</p>
            <label><strong>Status:</strong></label>
            <select value={selectedLead.status} onChange={(e) => setSelectedLead({ ...selectedLead, status: e.target.value as ILead['status'] })}>
              {statuses.map((status) => (
                <option key={status} value={status}>{t('leads.' + status)}</option>
              ))}
            </select>

            <div className="buttons">
              <Button variant="success" onClick={handleEditLead}>
                {t('action.save')}
              </Button>

              <Button variant="clean" onClick={() => setSelectedLead(null)}>
                {t('action.cancel')}
              </Button>
            </div>
          </LeadDetails>

        </Modal>
      }
    </LeadManagementPageContainer>
  );
}
